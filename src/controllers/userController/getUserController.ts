import { Request, Response } from "express";
import { findUserById } from "../../models/findUser";

export const getUserController = async (req: Request, res: Response)=>{
    const userId = req.params.id;
    const user = await findUserById(userId);

    if(!user){
        return res.status(404).json({message: "Could not find the user"});
    }

    //destructuring, so the password can be separeted and don't send in the response.
    const {id, username, email, description} = user;

    return res.status(200).json({id, username, email, description});
}