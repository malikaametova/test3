import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async resetProblemFlags(): Promise<number> {
        // Update users with hasProblems = true to hasProblems = false
        const count = await this.userRepository.count({ where: { hasProblems: true } });
        await this.userRepository.update({ hasProblems: true }, { hasProblems: false });
        return count; // Return the count of users updated
    }
}


