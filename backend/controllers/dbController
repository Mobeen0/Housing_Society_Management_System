const UserModel = require('../models/User');


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
        console.log(`saved with ${maxUserId}`)
    }catch(error){
        console.error('Error adding user to database:', error);
    }
}

module.exports = {
    getUser,
    addUser,
    checkUserName
}
