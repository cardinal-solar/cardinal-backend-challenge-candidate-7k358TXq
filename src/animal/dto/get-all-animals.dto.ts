import { Field, ObjectType } from "@nestjs/graphql";
import { Animal } from "../entities/animal.entity";

@ObjectType()
export class GetAllAnimalsPayload {

    @Field(()=>[Animal])
    animals: Animal[];

    @Field()
    count: number;
}
