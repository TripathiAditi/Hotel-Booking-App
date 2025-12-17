import {room as Room} from "../models/roomModel.js";
export const createroom = async (req , res)=>{
    console.log("Headers:", req.headers);
  console.log("Body:", req.body);
    try{
        const {room_number,room_type,price_per_night,capacity,amenities,image_url,status} = req.body;
        if(!room_number || !room_type || !price_per_night || !capacity ||!amenities|| !status){
            return res.status(400).json({message:"All fields are required"});
        }
        const roomExists = await Room.findOne({roomNumber:room_number});

        if(roomExists){
            return res.status(400).json({message : "Room already exists"});
        }
        const room = await Room.create({
            roomNumber:room_number,
            roomType:room_type,
            pricePerNight:price_per_night,
            capacity,
            status,
            amenities,
            image_url
        });

        res.status(201).json({
            message:"Room created successfully",
            room
        });
    

    }catch(error){
        res.status(500).json({
            message: error.message

        });
        console.log(error);
    }
};