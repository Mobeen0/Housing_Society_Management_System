const {addRent} = require('./dbController');

async function addRentProperty(req,res){
    let {uName,propertyId} = req.query;
    try{
        let retVal = await addRent(uName,propertyId);
        if(retVal){
            res.status(200).send('Property Rented');
        }
        else{
            res.status(400).send('Error Occured');
        }

    }catch(error){
        res.status(404).send('Internal Error Occured');
        console.log('error occured ', error.message);
    }
}

module.exports = {
    addRentProperty
}