const {addNotification} = require('./dbController');

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

module.exports = {
    addNotificationController
};