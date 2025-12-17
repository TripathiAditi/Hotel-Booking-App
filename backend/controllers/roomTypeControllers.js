export const createRoomType = async(req, res)=>{
    try{
        const {type_name , description, amenities} = req.body;

        if(!type_name || !description) {
            return res.status(400).json({ success: false, message:"All fields are required"});
        }
        const existingType = await createRoomType.findOne({type_name});
        if(existingType){
            return res.status(409).json({
                success: false,
            
            })
        }
    }
}