import { Request, Response } from 'express';
import { IUserService } from '../interfaces/IUserService';

class UserController {
    constructor(private userService: IUserService) {}

    public getUsers = async (req: Request, res: Response) => {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    };

    public createUser = async (req: Request, res: Response) => {
        try {
            const newUser = await this.userService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    };
}

export default UserController;
