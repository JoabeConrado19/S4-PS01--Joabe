import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDatabase1672950179324 implements MigrationInterface {
    name = 'FixDatabase1672950179324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying NOT NULL, "zipCode" character varying NOT NULL, "number" character varying, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_b1c76cb9f97ed8dbf18dd39bbb1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean DEFAULT true, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), CONSTRAINT "UQ_35852d70e433073812c5b8cc4c9" UNIQUE ("email"), CONSTRAINT "PK_0b1fcfcec60981758c4e2150509" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedules_users_properties_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" character varying NOT NULL, "hour" character varying NOT NULL, "propertiesId" uuid, "userId" uuid, CONSTRAINT "PK_428e5e42f5dda6f2e4d2f693615" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "properties_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold" boolean DEFAULT false, "value" numeric(12,2) NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, "categoryId" uuid, CONSTRAINT "REL_a4700095c0e739020a507ce6ef" UNIQUE ("addressId"), CONSTRAINT "PK_75b43adfed53992387160618f8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_9cae6ec9c64741189b79965989d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" ADD CONSTRAINT "FK_7a4ab34d219ab4adbae93b422e8" FOREIGN KEY ("propertiesId") REFERENCES "properties_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" ADD CONSTRAINT "FK_dac34b598a0adc48eac0fc0bbe0" FOREIGN KEY ("userId") REFERENCES "users_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties_database" ADD CONSTRAINT "FK_a4700095c0e739020a507ce6ef3" FOREIGN KEY ("addressId") REFERENCES "addresses_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties_database" ADD CONSTRAINT "FK_0d47f3b593267791cae9c9c9b0f" FOREIGN KEY ("categoryId") REFERENCES "category_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties_database" DROP CONSTRAINT "FK_0d47f3b593267791cae9c9c9b0f"`);
        await queryRunner.query(`ALTER TABLE "properties_database" DROP CONSTRAINT "FK_a4700095c0e739020a507ce6ef3"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" DROP CONSTRAINT "FK_dac34b598a0adc48eac0fc0bbe0"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_database" DROP CONSTRAINT "FK_7a4ab34d219ab4adbae93b422e8"`);
        await queryRunner.query(`DROP TABLE "category_database"`);
        await queryRunner.query(`DROP TABLE "properties_database"`);
        await queryRunner.query(`DROP TABLE "schedules_users_properties_database"`);
        await queryRunner.query(`DROP TABLE "users_database"`);
        await queryRunner.query(`DROP TABLE "addresses_database"`);
    }

}
