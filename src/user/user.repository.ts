import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async findById(id: number): Promise<User | null> {
        return await this.findOne({ where: { id } });
    }
    
    }
    
    



