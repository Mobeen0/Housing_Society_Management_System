const {addNotification, getNotificationsDB} = require('./dbController');

async function addNotificationController(req,res){
    const {notiHeading ,notiContent,userType} = req.query;
    try{
        await addNotification(notiContent, userType, notiHeading);
        res.status(200).send('Notification added successfully');
    }catch(error){
        console.error('Error adding notification:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function getNotifications(req,res){
    try{
        const {userType} = req.query;
        let notiType = '';
        if(userType ==='N' || userType === 'B'){
            notiType = 'Both'
        }
        if(userType==='H'){
            notiType = 'Residents'
        }
        if(userType==='T'){
            notiType = 'Tenants'  
        }
        const notifications = await getNotificationsDB('Both',notiType);
        res.status(200).send(notifications);
        
    }
    catch(error){
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    addNotificationController,
    getNotifications
};