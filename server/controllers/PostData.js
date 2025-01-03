const { cloudinaryConnect } = require('../config/cloudinary');
const ServerBrowser = require('../models/ServerBrowser');
const { uploadImage } = require('./uploadImage');

exports.postData = async (req, res) => {
    try {
        const { title, map, region, mode, ticketRate, players,category, ping, serverDetails } = req.body;

        // Logging to debug
        console.log('Received Data:', req.body);

        // Ensure file is present
        const image = req.files.imagefile;
        const countryImg = req.files.countryFlag;
        if (!image) {
            return res.status(404).json({
                success: false,
                message: 'Image not found',
            });
        }

        // Connect to Cloudinary and upload image
        cloudinaryConnect();
        const uploadDetails = await uploadImage(image, 'Battlefield');
        const countryUploadDetails = await uploadImage(countryImg, 'Flags');
        if (!uploadDetails || !countryUploadDetails) {
            return res.status(500).json({
                success: false,
                message: "Error while uploading to Cloudinary",
            });
        }
        const imageUrl = uploadDetails.secure_url;
        const countryImgUrl = countryUploadDetails.secure_url;
        // Save data in the database
        const response = await ServerBrowser.create({
            title,
            map,
            region,
            mode,
            ticketRate,
            players,
            ping,
            category,
            serverDetails,
            imageUrl,
            countryImgUrl,
        });

        return res.status(200).json({
            success: true,
            message: "Data posted successfully!",
            data: response,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error while posting data",
        });
    }
};
