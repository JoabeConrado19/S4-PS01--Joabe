import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn, Timestamp } from "typeorm";
import { Adresses } from "./adresses.entity";
import { Categories } from "./category.entity";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity('schedules_users_properties_database')
class SchedulesUsersProperties {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    date: Date

    @Column()
    hour: Date

    @ManyToOne(() => Properties,schedulesUsersProperties => schedulesUsersProperties.properties)
    properties: SchedulesUsersProperties
    schedulesUsersProperties: any;

    @ManyToOne(() => User, user => user.schedulesUsersProperties)
    user: User
    
}



export { SchedulesUsersProperties }