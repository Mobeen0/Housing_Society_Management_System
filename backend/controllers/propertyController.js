const {addPropertyDB,getOpenListingsDb, getOwnedListingsDb} = require('./dbController');


async function addProperty(req,res){
    try{
        let {pName, pDesc, pSize,pCity} = req.query;
        let retVal = await addPropertyDB(pName,pDesc,pSize,pCity);
        if(retVal === true){
            res.status(200).json({ success: true, message: 'Property added successfully' });
        }
        else{
            res.status(204).json({ success: false, message: 'Property was not added' });
        }
        
    }catch(error){
        res.status(404).json({ success: false, message: 'Error occured' });
    }
}

async function getOpenListings(req,res){
    try{
        let retVal = await getOpenListingsDb();
        if(retVal){
            res.status(200).json({ success: true, data: retVal });
        }else{
            res.status(204).json({ success: false, message: 'No open listings' });
        }
    }catch(error){
        res.status(404).json({ success: false, message: 'Error occured' });
    }
}

async function getOwnedListings(req,res){
    try{
        let uName = req.query;
        let retVal = await getOwnedListingsDb(uName.uName);
        if(retVal){
            res.status(200).json(retVal);
        }
        else{
            res.status(204).json({success: false, message: 'No owned listings'});
        }

    }catch(error){
        res.status(404).json({ success: false, message: 'Error occured' });

    }
}

module.exports = {addProperty,
    getOpenListings,
    getOwnedListings
};