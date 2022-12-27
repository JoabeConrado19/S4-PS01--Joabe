import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1672127551785 implements MigrationInterface {
    name = 'InitialMigration1672127551785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_9cae6ec9c64741189b79965989d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "properties_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold" boolean DEFAULT false, "value" numeric(12,2) NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressesId" uuid, "categoriesId" uuid, CONSTRAINT "REL_05d51e98b947ed651ebec506d0" UNIQUE ("addressesId"), CONSTRAINT "PK_75b43adfed53992387160618f8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adresses_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying NOT NULL, "zipCode" character varying NOT NULL, "number" character varying, "city" character varying NOT NULL, "state" character varying NOT NULL, "propertiesId" uuid, CONSTRAINT "REL_1d0b9be850c1c5c125fd93a567" UNIQUE ("propertiesId"), CONSTRAINT "PK_995ec409141b52cfe9cd54c52f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean DEFAULT true, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), CONSTRAINT "UQ_35852d70e433073812c5b8cc4c9" UNIQUE ("email"), CONSTRAINT "PK_0b1fcfcec60981758c4e2150509" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedules_users_properties_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "hour" TIMESTAMP NOT NULL, "propertiesId" uuid, "userId" uuid, CONSTRAINT "PK_428e5e42f5dda6f2e4d2f693615" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "properties_database" ADD CONSTRAINT "FK_05d51e98b947ed651ebec506d0e" FOREIGN KEY ("addressesId") REFERENCES "adresses_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties_database" ADD CONSTRAINT "FK_dccba041944a88b39cfd5ddf95f" FOREIGN KEY ("categoriesId") REFERENCES "category_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adresses_database" ADD CONSTRAINT "FK_1d0b9be850c1c5c125fd93a567c" FOREIGN KEY ("propertiesId") REFERENCES "properties_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" ADD CONSTRAINT "FK_7a4ab34d219ab4adbae93b422e8" FOREIGN KEY ("propertiesId") REFERENCES "properties_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" ADD CONSTRAINT "FK_dac34b598a0adc48eac0fc0bbe0" FOREIGN KEY ("userId") REFERENCES "users_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" DROP CONSTRAINT "FK_dac34b598a0adc48eac0fc0bbe0"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" DROP CONSTRAINT "FK_7a4ab34d219ab4adbae93b422e8"`);
        await queryRunner.query(`ALTER TABLE "adresses_database" DROP CONSTRAINT "FK_1d0b9be850c1c5c125fd93a567c"`);
        await queryRunner.query(`ALTER TABLE "properties_database" DROP CONSTRAINT "FK_dccba041944a88b39cfd5ddf95f"`);
        await queryRunner.query(`ALTER TABLE "properties_database" DROP CONSTRAINT "FK_05d51e98b947ed651ebec506d0e"`);
        await queryRunner.query(`DROP TABLE "schedules_users_properties_database"`);
        await queryRunner.query(`DROP TABLE "users_database"`);
        await queryRunner.query(`DROP TABLE "adresses_database"`);
        await queryRunner.query(`DROP TABLE "properties_database"`);
        await queryRunner.query(`DROP TABLE "category_database"`);
    }

}
