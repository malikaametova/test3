"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1688000000000 = void 0;
class CreateUserTable1688000000000 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE user (
                id INT AUTO_INCREMENT PRIMARY KEY,
                firstName VARCHAR(255) NOT NULL,
                lastName VARCHAR(255) NOT NULL,
                age INT NOT NULL,
                gender ENUM('male', 'female', 'other') NOT NULL,
                hasProblems BOOLEAN DEFAULT false
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE user`);
    }
}
exports.CreateUserTable1688000000000 = CreateUserTable1688000000000;
