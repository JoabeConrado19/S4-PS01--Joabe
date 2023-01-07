import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties_database")
class SchedulesUsersProperties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date: string;

  @Column()
  hour: string;

  @ManyToOne(
    () => Properties,
    (schedulesUsersProperties) => schedulesUsersProperties.schedules,
    { eager: true }
  )
  property: Properties;

  @ManyToOne(() => User, (user) => user.schedulesUsersProperties)
  user: User;
}

export { SchedulesUsersProperties };
