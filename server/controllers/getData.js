const ServerBrowser = require('../models/ServerBrowser');

exports.getData = async(req, res)=>{
    try{
        const result = await ServerBrowser.find({});
        console.log(result);
        return res.status(200).json({
            success: true,
            message:"Data fetched successfully",
            data: result
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message:"Error while fetching data",
        })
    }
}