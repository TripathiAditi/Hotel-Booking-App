import RoomType from "../models/roomtypeModel.js";


export const createRoomType = async (req, res) => {
    try {
        const { type_name, description, basePrice, maxCapacity, amenities } = req.body;

        
        if (!type_name || !description || !basePrice || !maxCapacity || !amenities) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }


        const existingType = await RoomType.findOne({ type_name });
        if (existingType) {
            return res.status(409).json({
                success: false,
                message: "Room type already exists"
            });
        }

        
        const roomType = await RoomType.create({
            typeName :type_name,
            description,
            basePrice,
            maxCapacity,
            amenities
        });

        res.status(201).json({
            success: true,
            message: "Room type created successfully",
            data: roomType
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating room type",
            error: error.message
        });
    }
};

export const getAllRoomTypes = async (req, res) => {
    try {
        const roomTypes = await RoomType.find();
        res.status(200).json({
            success: true,
            data: roomTypes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

