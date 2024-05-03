const {getUser,checkUserName,addUser,requestTenants, requestOwners} = require('./dbController');

async function verifyLogin(req,res){
    try{
    let {userName,userPass} = req.query;
    const user = await(getUser(userName,userPass))
    if (user) {
        res.status(200).json({ success: true, user });
    } else {
        res.status(204).json({ success: false, message: 'User not found' });
    }
    }catch(error){
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
    return getUser(req,res)
}



async function signUpUser(req,res){
    try{
        const {FName1,LName1,UName1,email1,password1} = req.query;
        const user = await(checkUserName(UName1))
        if(user){
            res.status(204).json({ success: false, message: 'User already exists' });
        }
        else{
            await (addUser(FName1,LName1,UName1,email1,password1));
            res.status(200).json({ success: true, message: 'User added successfully' });
        }

    }catch(error){
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

async function getTenants(req,res){
    try{
        const tenants = await(requestTenants());
        res.status(200).send(tenants);
    }
    catch(error){

    }
}

async function getOwners(req,res){
    try{
        const owners = await(requestOwners());
        res.status(200).send(owners);
    }
    catch(error){

    }
}



module.exports = {
    verifyLogin,
    signUpUser,
    getTenants,
    getOwners
}

