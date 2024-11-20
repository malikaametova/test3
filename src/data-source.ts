import { DataSource } from 'typeorm';
import { User } from './user/user.entity'; // Use relative path
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: [User],
    migrations: ['src/migrations/*.ts'], // Путь к вашим миграциям
});
//# sourceMappingURL=data-source.js.map