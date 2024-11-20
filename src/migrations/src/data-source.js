import { DataSource } from 'typeorm';
import { User } from './user/user.entity'; // Use relative path

export const AppDataSource = new DataSource({
    type: 'mysql', // Или другой тип базы данных, которую Вы используете
    host: process.env.DB_HOST,
    port: 3306,
    username:root,
    password:1234,
    database:mydatabase,
    synchronize: false, // Убедитесь, что у Вас это значение false для миграций
    logging: true,
    entities: [User], // Укажите Вашу сущность или массив сущностей
    migrations: ['src/migrations/*.ts'], // Путь к вашим миграциям
});

