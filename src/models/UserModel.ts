import { Schema, model, Document } from 'mongoose';
import { IUser } from '../interfaces/IUser';

interface IUserModel extends IUser, Document {}

const userSchema = new Schema<IUserModel>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export default model<IUserModel>('User', userSchema);
