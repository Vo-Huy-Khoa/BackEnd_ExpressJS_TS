import { Schema, model } from "mongoose";

interface IUser{
    name: string,
    email: string,
}

const userSchema = new Schema<IUser>(
    {
        name: {type: String},
        email: {type: String}
    },
    {
        timestamps: true
    }
)

const UserModel = model<IUser>("User", userSchema);

export default UserModel;