import { Schema, model } from "mongoose";
import bcrypt from "bcrypt-nodejs"

interface IUser{
    name: string,
    email: string,
    password : string
}

const userSchema = new Schema<IUser>(
    {
        name: {type: String},
        email: {type: String},
        password: {type: String}
    },
    {
        timestamps: true
    }
)

userSchema.methods.encryptPassword = function (password :string) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5));
}

userSchema.methods.validPassword = function (password:string) {
    return bcrypt.compareSync(password, this.password)
}

const UserModel = model<IUser>("User", userSchema);

export default UserModel;