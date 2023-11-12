import { IUserModel } from "../interfaces/userModel"

export const verifyUserReqData = ({username, email, password} : IUserModel)=>{
    if(!username || !email || !password){
        throw new Error("Data is missing");
    }
}