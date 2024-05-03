const {addOwned} = require('./dbController');

async function addOwnedProperty(req,res){
    let {uName,propertyId} = req.query;
    try{
        const retVal = await addOwned(uName,propertyId);
        if(retVal){
            res.status(200).send('Property Added');
        }
        else{
            res.status(400).send('Error Occured');
        }

    }catch(error){
        res.status(404).send('Internal Error Occured');
    }

}


module.exports = {
    addOwnedProperty
}