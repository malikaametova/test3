import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Убедитесь, что TypeOrmModule импортирован
import { UserService } from './user.service';
import { UserRepository } from './user.repository'; // Проверьте путь к файлу
import { User } from './user.entity'; // Проверьте путь к файлу

@Module({
  imports: [TypeOrmModule.forFeature([User ])], // Импортируйте модель User
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
