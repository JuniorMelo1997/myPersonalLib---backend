import { prisma } from "../helpers/prismaClientInstance"

export const getAllUsersModel = async ()=>{
    const users = await prisma.user.findMany({})

    return users;
}