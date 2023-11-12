import { IUserAlreadyExists } from "../interfaces/userAlreadyExists";
import { findUserByEmail, findUserByName } from "../models/findUser";

export const verifyUserAlreadyExists = async ({username, email}: IUserAlreadyExists)=>{
    const userByName = await findUserByName(username);
    const userByEmail = await findUserByEmail(email);

    if(!userByEmail && !userByName){
        return "No user found";
    }

    if(!userByEmail){
        return "Username already in use";
    }

    return "Email already in use";
}