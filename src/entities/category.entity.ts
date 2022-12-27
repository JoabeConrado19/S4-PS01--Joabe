import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Properties } from "./properties.entity";

@Entity('category_database')
class Categories {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string
    properties: any;
    
    
}

export { Categories }