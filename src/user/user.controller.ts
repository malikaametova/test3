import { Controller, Get, Put } from '@nestjs/common';
import { UserService } from './user.service'; // Adjust the import path as necessary

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll() {
        // Logic to return all users
        return []; // Replace with actual logic to fetch users
    }

    @Put('reset-problems')
    async resetProblemFlags(): Promise<{ count: number }> {
        const count = await this.userService.resetProblemFlags();
        return { count };
    }
}
