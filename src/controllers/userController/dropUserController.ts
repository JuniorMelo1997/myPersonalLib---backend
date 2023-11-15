import { Request, Response } from "express";
import { findUserById } from "../../models/findUser";
import { verifyPasswordMatches } from "../../helpers/verifyPasswordsMatches";
import { dropUserModel } from "../../models/dropUserModel";

export const dropUserController = async (req: Request, res: Response)=>{
    const userId = req.params.id;
    const {confirmPassword} = req.body;

    const user = await findUserById(userId);

    if(!user){
        return res.status(404).json({message: "User not found"});
    }

    try {
        await verifyPasswordMatches(confirmPassword, user.password);
    } catch (error) {        
        return res.status(401).json({message: "Passwords don't matches"});
    }

    try {
        await dropUserModel(userId);
    } catch (error) {
        return res.status(404).json({message: "Error on trying to delete the user"});
    }

    return res.status(204).json();
}