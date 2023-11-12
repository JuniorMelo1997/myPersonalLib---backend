import { prisma } from "../helpers/prismaClientInstance"

const findUserByName = async (username: string)=>{
    const user = await prisma.user.findFirst({where:{
        username
    }})

    if(!user){
        return false
    }

    return user;
}

const findUserByEmail = async (email: string)=>{
    const user = await prisma.user.findFirst({where:{
        email
    }})

    if(!user){
        return false
    }

    return user;
}

export {findUserByName, findUserByEmail};