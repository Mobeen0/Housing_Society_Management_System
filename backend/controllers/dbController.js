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
            user_type: "N"
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
        
        if (ownedProperties.length > 0 && rentedProperties.length > 0) {
            let openProperties = await ListModel.find({
                propertyID: {
                  $nin: ownedPropertiesArray,
                  $nin: rentedPropertiesArray
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
        let ownedPropertiesArray = Array.isArray(ownedProperties) ? ownedProperties : [ownedProperties];
        if(ownedProperties.length === 0){
            return null;
        }
        else{
            console.log(ownedPropertiesArray);
            return await ListModel.find({propertyID: ownedPropertiesArray});
        }

    }catch(error){
        console.log('error occured ', error.message);
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
    getOwnedListingsDb
}
