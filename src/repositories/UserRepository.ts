import User from '../models/UserModel';
import { IUser } from '../interfaces/IUser';

class UserRepository {
    public async findAll(): Promise<IUser[]> {
        return await User.find();
    }

    public async create(userData: IUser): Promise<IUser> {
        const user = new User(userData);
        return await user.save();
    }
}

export default UserRepository;
