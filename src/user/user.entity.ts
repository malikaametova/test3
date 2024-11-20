import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number; // Non-null assertion

    @Column({ nullable: true })
    firstName?: string;

    @Column({ nullable: true })
    lastName?: string;

    @Column({ unique: true, nullable: false })
    email!: string; // Non-null assertion

    @Column({ nullable: false })
    password!: string; // Non-null assertion

    @Column({ default: false })
    hasProblems: boolean = false; // Default value
}
