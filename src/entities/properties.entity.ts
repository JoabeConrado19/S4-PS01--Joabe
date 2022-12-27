import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Adresses } from "./adresses.entity";
import { Categories } from "./category.entity";

@Entity('properties_database')
class Properties {
    propertie: Properties;
    category: string;
    address: { id: string; district: string; zipCode: string; number: string; city: string; state: string; properties: Properties; };
    update(arg0: { addresses: Adresses; }) {
        throw new Error("Method not implemented.");
    }

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({default: false, nullable: true})
    sold: boolean

    @Column({type: "decimal", precision: 12, scale: 2})
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(()=> Adresses) @JoinColumn()
    addresses: Adresses
    

    @ManyToOne(() => Categories, categories => categories.properties)
    categories: Categories
    properties: any;

}

export { Properties }