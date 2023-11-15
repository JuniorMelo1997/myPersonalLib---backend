import bcrypt from "bcrypt";

const comparePassword = async (password: string, confirmPassword: string)=>{
    return await bcrypt.compare(confirmPassword, password);
}

export {comparePassword};