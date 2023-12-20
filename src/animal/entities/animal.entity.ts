import { Field, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('animals')
export class Animal {

  @PrimaryGeneratedColumn('increment', { type: 'int', name: 'id' })
  @Field(() => Number)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  type: string;

  @Column()
  @Field(() => String)
  species: string;

  @Column({type: 'int'})
  @Field(() => Number)
  age: number;

  @Column()
  @Field(() => String)
  gender: string;

  @Column({type: 'float'})
  @Field(() => Number)
  weight: number;

  @Column()
  @Field(() => String)
  verse: string;

  @CreateDateColumn({ type: 'timestamptz' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  @Field(() => Date)
  updatedAt: Date;

  @Column({ nullable: true, type: 'timestamptz' })
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}