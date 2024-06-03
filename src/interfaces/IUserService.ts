import { IUser } from './IUser';

export interface IUserService {
    getAllUsers(): Promise<IUser[]>;
    createUser(userData: IUser): Promise<IUser>;
}
