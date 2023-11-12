import bcrypt from "bcrypt";

const encryptPassword = (password: string)=>{    
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    return hashedPassword;
}

export {encryptPassword};