import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Properties } from "./properties.entity";

@Entity('adresses_database')
class Adresses {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    district: string

    @Column()
    zipCode: string

    @Column({ nullable: true})
    number: string

    @Column()
    city: string

    @Column()
    state: string

    @OneToOne(()=> Properties) @JoinColumn()
    properties: Properties

}


export { Adresses }