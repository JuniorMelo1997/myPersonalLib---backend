import { Request, Response } from "express";
import { createUserModel } from "../../models/createUserModel";
import { verifyUserReqData } from "../../helpers/verifyUserReqData";
import { verifyUserAlreadyExists } from "../../helpers/verifyUserAlreadyExists";
import { encryptPassword } from "../../helpers/encryptPassword";
import isEmail from "validator/lib/isEmail";

export const createUserController = async (req: Request, res: Response)=>{
    const {username, email, password, description} = req.body;

    //Verify all required data was send
    try {        
        verifyUserReqData({username, email, password});
    } catch (error) {
        return res.status(422).json({message: "Data is missing"});
    }

    //Verify email is in correct format
    if(!isEmail(email)){
        return res.status(400).json({message: "Invalid email format"});
    }

    //Verify user already exists
    const userAlreadyExists = await verifyUserAlreadyExists({username, email})
    if(userAlreadyExists != "No user found"){
        return res.status(409).json({message: userAlreadyExists});
    }

    //Hash password
    const hashedPassword = encryptPassword(password);

    //Create the user
    try {
        await createUserModel({username, email, password: hashedPassword, description});
    } catch (error) {
        return res.status(400).json({message: "Error on creating the user"})
    }

    return res.json({message: "User created successfully"});
}
