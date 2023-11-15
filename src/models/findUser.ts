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

const findUserById = async (id: string)=>{
    const user = await prisma.user.findFirst({where:{
        id
    }});
    
    if(!user){
        return false
    }

    return user;
}

export {findUserByName, findUserByEmail, findUserById};