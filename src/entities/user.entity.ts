import { getRounds, hashSync } from "bcryptjs";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, SaveOptions, BeforeUpdate } from "typeorm";

@Entity('users_database')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    password: string

    @Column({ unique: true })
    email: string

    @Column()
    isAdm: boolean

    @Column({ default: true, nullable: true })
    isActive: boolean

    @CreateDateColumn({ nullable: true })
    createdAt: Date

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        const isEncrypted = getRounds(this.password)
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10)
        }
    }

}

export { User }