const UserModel = require('../models/User');
const NotificationsModel = require('../models/Notifications');
const ListModel = require('../models/List');
const OwnModel = require('../models/Owned');
const RentModel = require('../models/Rent');

async function getUser(userName, userPass){
    try {
        return await UserModel.findOne({ UName: userName, password: userPass });
    } catch (error) {
        console.error('Error retrieving user from database:', error);
    }
}

async function checkUserName(userName){
    try {
        return await UserModel.findOne({ UName: userName });
    } catch (error) {
        console.error('Error retrieving user from database:', error);
    }
}

async function addUser(FName1,LName1,UName1,email1,password1){
    try{
        const maxUserIdUser = await UserModel.findOne({}, { UserId: 1 })
                                    .sort({ UserId: -1 }) 
                                    .limit(1);
        let maxUserId = 0;
        if(maxUserIdUser.UserId){
            maxUserId = maxUserIdUser.UserId + 1
        }
        else{
            maxUserId = 1
        }
        
        const newUser = new UserModel({
            UserId: maxUserId,
            FName: FName1,
            LName: LName1,
            UName: UName1,
            email: email1,
            password: password1,
            user_type: "B"
        });

        await newUser.save();
    }catch(error){
        console.error('Error adding user to database:', error);
    }
}

async function addNotification(notiContent, userType, notiHeading){
    try{
        const newNotification = new NotificationsModel({
            notiContent: notiContent,
            userType: userType,
            date: new Date(),
            notiHeading: notiHeading
        });

        await newNotification.save();
    }catch(error){
        console.error('Error adding notification to database:', error);
    }
}

async function getNotificationsDB(userType1,userType2){
    try{
        return await NotificationsModel.find({ $or : [{userType:userType1}, {userType: userType2}] });
    }
    catch(error){
        return null;
    }
}

async function requestTenants(){
    try{
        tenants = await UserModel.find({$or: [{user_type:'B'}, {user_type:'T'}]});
        return tenants;
    }catch(error){
        return null;
    }
}

async function requestOwners(){
    try{
        tenants = await UserModel.find({$or: [{user_type:'B'}, {user_type:'H'}]});
        return tenants;
    }catch(error){
        return null;
    }
}

async function addPropertyDB(pName,pDesc,pSize,pCity){
    try{
        let maxProperty = await ListModel.findOne({}, { propertyID: 1 })
        .sort({ propertyID: -1 }) 
        .limit(1);

        let currId = 0;
        if(maxProperty){
            currId = maxProperty.propertyID + 1
        }

        const newProperty = new ListModel({
            propertyID: currId,
            propertyName: pName,
            description: pDesc,
            location:pCity,
            size: pSize
        });
        await newProperty.save();
        return true;
    }
    catch(error){
        return false;
    }
}

async function getOpenListingsDb(){
    try{
        let ownedProperties = await OwnModel.find().exec().then(result => result.map(owned => owned.propertyId));
        let rentedProperties = await RentModel.find().exec().then(result => result.map(rent => rent.propertyId));

        let ownedPropertiesArray = Array.isArray(ownedProperties) ? ownedProperties : [ownedProperties];
        let rentedPropertiesArray = Array.isArray(rentedProperties) ? rentedProperties : [rentedProperties];

        let allProperties = [...ownedPropertiesArray, ...rentedPropertiesArray];
        
        if (ownedProperties.length > 0 && rentedProperties.length > 0) {
            let openProperties = await ListModel.find({
                propertyID: {
                  $nin: allProperties
                }
              });
            return openProperties;
        } else {
            if(ownedProperties.length>0){
                let openProperties = await ListModel.find({
                    propertyID: {
                      $nin: ownedPropertiesArray
                    }
                  });
                return openProperties;
            }
            if(rentedProperties.length > 0){
                let openProperties = await ListModel.find({
                    propertyID: {
                      $nin: rentedPropertiesArray
                    }
                  });
                return openProperties;
            }
            if(ownedProperties.length === 0 && rentedProperties.length === 0){
                let openProperties = await ListModel.find();
                return openProperties;
            }
        }
    }catch(error){
        console.log('error in db:', error.message);

    }
}


async function getOwnedListingsDb(uName){
    try{
        let ownedProperties = await OwnModel.find({UName: uName.toString()}).exec().then(owned => owned.map(owned => owned.propertyId));
        let rentedProperties = await RentModel.find({UName: uName.toString()}).exec().then(rented => rented.map(rented => rented.propertyId));
        let allProperties = [...ownedProperties, ...rentedProperties];
        let allPropertiesArray = Array.isArray(allProperties) ? allProperties : [allProperties];
        if(allProperties.length === 0){
            return null;
        }
        else{
            return await ListModel.find({propertyID: allPropertiesArray});
        }

    }catch(error){
        console.log('error occured ', error.message);
    }

}



async function addOwned(uName,propertyID){
    try{   
        let addOwned1 = new OwnModel({
            UName: uName,
            propertyId: propertyID,
            utilityStatus: 'Active'
        });
        await addOwned1.save();
        return true;

    }catch(error){
        console.log('error occured', error.message);
        return false;
    }
}

async function addRent(uName,propertyID){
    try{   
        let addRent2 = new RentModel({
            UName: uName,
            propertyId: propertyID
        });
        await addRent2.save();
        return true;

    }catch(error){
        return false;
    }
}


module.exports = {
    getUser,
    addUser,
    checkUserName,
    addNotification,
    getNotificationsDB,
    requestTenants,
    requestOwners,
    addPropertyDB,
    getOpenListingsDb,
    getOwnedListingsDb,
    addOwned,
    addRent
}
