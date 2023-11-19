import { Request, Response } from "express";
import { getAllUsersModel } from "../../models/getAllUsersModel";

export const getAllUsersController = async (req: Request, res: Response)=>{
    const users = await getAllUsersModel();

    if(!users){
        return res.status(404).json("Could not find any user");
    }

    const usersNoPassword = users.map(user => {
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            description: user.description
        }
    })

    return res.status(200).json(usersNoPassword);
}