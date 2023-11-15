import { comparePassword } from "./comparePassword";

export const verifyPasswordMatches = async (confirmPassword: string, password: string)=>{
    const passwordMatches = await comparePassword(password, confirmPassword);

    if(!passwordMatches){
        throw new Error("Passwords don't matches");
    }

    return true;
}