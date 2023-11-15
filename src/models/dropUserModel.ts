import { prisma } from "../helpers/prismaClientInstance"

export const dropUserModel = async (id: string)=>{
    try {
        await prisma.user.delete({where:{
            id
        }})
    } catch (error) {
        throw new Error("Could not delete the user");
    }

    return ;
}