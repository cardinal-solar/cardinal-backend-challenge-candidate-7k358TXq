import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAnimalInput {
  
  @Field(() => String)
  name: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  species: string;

  @Field(() => Int)
  age: number;

  @Field(() => String)
  gender: string;

  @Field(() => Number)
  weight: number;

  @Field(() => String)
  verse: string;
}
