const ServerBrowser = require('../models/ServerBrowser');

exports.updateData = async (req, res) => {
    try {
        const { id, setting, advanced, rules } = req.body;

        // Update only the provided fields
        const result = await ServerBrowser.findByIdAndUpdate(
            id, // First parameter: ID
            { setting, advanced, rules }, // Second parameter: Update data
            { new: true } // Option to return the updated document
        );

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "No document found with the provided ID",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Data updated successfully",
            data: result,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error while updating data",
        });
    }
};
