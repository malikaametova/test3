import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '/user.entity'

export class SeedUsers1623456789012 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const users = [];
    for (let i = 0; i < 1000000; i++) {
      users.push({
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
        age: Math.floor(Math.random() * 100),
        gender: Math.random() > 0.5 ? 'Male' : 'Female',
        hasProblems: Math.random() > 0.5,
      });
    }
    await queryRunner.manager.createQueryBuilder()
      .insert()
      .into(User)
      .values(users)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(User, {});
  }
}
