import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./category.entity";
import { SchedulesUsersProperties } from "./schedules_users_properties.entity";

@Entity("properties_database")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false, nullable: true })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses)
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories, (categories) => categories.properties)
  category: Categories;

  @OneToMany(() => SchedulesUsersProperties, (shedules) => shedules.property)
  schedules: SchedulesUsersProperties[];
}

export { Properties };
