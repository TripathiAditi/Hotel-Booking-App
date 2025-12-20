import Booking from "../models/bookingModel.js";


export const createBooking = async(req , res) =>{
    try{
        const{
            user,
            room, checkInDate,checkOutDate,totalAmount,bookingStatus} = req.body;
        
            const booking = await Booking.create({
                user,
                room,
                checkInDate,
                checkOutDate,
                totalAmount,
                bookingStatus
            });
            res.status(201).json({
                success:true,
                message:"Booking created successfully",
                data: booking
            });
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Failed to create booking",
            error: error.message
        });
    }
};