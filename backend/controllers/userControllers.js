import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";

export const register = async (req , res) =>{
    
    try{
        const {name, email, password, role,confirmPassword } = req.body;
        if(!name || !email || !password || !role || !confirmPassword){
            return res.status(400).json({message: "All fields are required"});
        }
        if(password !== confirmPassword){
            return res.status(400).json({message: "PASsword do not match"});
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password , 10);

        await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });
        return res.status(201).json({
            message:"Account created successfully.",
            success: true,
        });
    }catch (error){
        console.log(error);
        res.status(400).json({message:"Error occured"}); 
    }

};
export const login = async (req,res) =>{
    console.log(req.body);
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"Incorrect username or password",
                success:false,
            });
        }
        const isPasswordMatch = await bcrypt.compare(password , user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorrect username or password",
                success: false,
            });
        }
        const tokenData = {
            userId: user._id,
        };
        const token = await jwt.sign(tokenData , process.env.JWT_SECRET_KEY,{
            expiresIn: "1d",
        });
        return res.status(200).cookie("hms_token" , token, {
            maxAge: 1* 24*60*60*1000,
            secure:true,
            httpOnly: true,
            sameSite: "none",
        })
        .json({
            _id: user._id,
            usename: user.name,
            token:token

        });
    }catch (error){
        console.log(error);
        res.status(400).json({message:"Some Error"});
    }
};
export const logout =(req,res)=>{
    try{
        return res.status(200).cookie("hms_token","",{maxAge:0}).json({
            message:"Logged out Successfully",
        });

    } catch (error){
        console.log(error);
    }
    

};
