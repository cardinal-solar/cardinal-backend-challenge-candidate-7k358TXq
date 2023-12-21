import { MigrationInterface, QueryRunner } from "typeorm";

export class  Migration1703121310518 implements MigrationInterface {
    name = ' Migration1703121310518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "animals" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "species" character varying NOT NULL, "age" integer NOT NULL, "gender" character varying NOT NULL, "weight" double precision NOT NULL, "verse" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_6154c334bbb19186788468bce5c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "animals"`);
    }

}
