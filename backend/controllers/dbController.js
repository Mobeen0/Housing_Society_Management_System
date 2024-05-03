const UserModel = require('../models/User');
const NotificationsModel = require('../models/Notifications');

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

module.exports = {
    getUser,
    addUser,
    checkUserName,
    addNotification,
    getNotificationsDB,
    requestTenants,
    requestOwners
}
