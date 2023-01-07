import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Properties } from "./properties.entity";

@Entity("addresses_database")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  district: string;

  @Column()
  zipCode: string;

  @Column({ nullable: true })
  number: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @OneToOne(() => Properties)
  property: Properties;
}

export { Addresses };
