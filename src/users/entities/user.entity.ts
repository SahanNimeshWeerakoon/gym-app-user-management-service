import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    gender: string;

    @Column()
    phoneNumber: string;

    @Column()
    address: string;

    @Column({ default: false })
    isWhatsappAvailable: boolean;

    @Column('text', { array: true })
    visitDays: string[];
}
