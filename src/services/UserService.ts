import { IUserService } from '../interfaces/IUserService';
import { IUser } from '../interfaces/IUser';
import UserRepository from '../repositories/UserRepository';

class UserService implements IUserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async getAllUsers(): Promise<IUser[]> {
        return await this.userRepository.findAll();
    }

    public async createUser(userData: IUser): Promise<IUser> {
        return await this.userRepository.create(userData);
    }
}

export default UserService;
