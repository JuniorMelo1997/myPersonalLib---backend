import { prisma } from "../helpers/prismaClientInstance";
import { IUserModel } from "../interfaces/userModel";

export const createUserModel = async ({username, email, password, description}: IUserModel)=>{
    const user = await prisma.user.create({data:{
        username, email, password, description
    }})

    return user;
}