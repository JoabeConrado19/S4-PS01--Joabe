import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDatabase1672950290857 implements MigrationInterface {
    name = 'FixDatabase1672950290857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" DROP CONSTRAINT "FK_7a4ab34d219ab4adbae93b422e8"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" RENAME COLUMN "propertiesId" TO "propertyId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" ADD CONSTRAINT "FK_89d51da658dae9e526d98f38535" FOREIGN KEY ("propertyId") REFERENCES "properties_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" DROP CONSTRAINT "FK_89d51da658dae9e526d98f38535"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" RENAME COLUMN "propertyId" TO "propertiesId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" ADD CONSTRAINT "FK_7a4ab34d219ab4adbae93b422e8" FOREIGN KEY ("propertiesId") REFERENCES "properties_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
