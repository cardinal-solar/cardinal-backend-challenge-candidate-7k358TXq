import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnimalService } from './animal.service';
import { Animal } from './entities/animal.entity';
import { CreateAnimalInput } from './dto/create-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';
import { CommonPayload } from './dto/common.dto';
import { GetAllAnimalsPayload } from './dto/get-all-animals.dto';
import { GetAllAnimalsInput } from './dto/get-all-animals.input';
import { AnimalActions } from './animal-actions.interface';
import { UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from './animal.guard';

@Resolver(() => Animal)
export class AnimalResolver implements AnimalActions{
  constructor(private readonly animalService: AnimalService) {}

  @UseGuards(ApiKeyGuard)
  @Query(() => Animal)
  async getAnimalById(@Args('id', { type: () => Int }) id: number) {
    return this.animalService.getAnimalById(id);
  }

  @Mutation(() => Animal)
  async eat(@Args('id', { type: () => Int }) id: number): Promise<Animal> {
    return this.animalService.eat(id);
  }

  @Mutation(() => Animal)
  async sleep(@Args('id', { type: () => Int }) id: number): Promise<Animal> {
    return this.animalService.sleep(id);
  }

  @Query(() => CommonPayload)
  async speak(@Args('id', { type: () => Int }) id: number): Promise<CommonPayload> {
    return this.animalService.speak(id);
  }

  @Query(() => GetAllAnimalsPayload)
  async getAllAnimals(@Args('getAllAnimalsInput') getAllAnimalsInput: GetAllAnimalsInput): Promise<GetAllAnimalsPayload> {
    return this.animalService.getAll(getAllAnimalsInput);
  }

  @Mutation(() => CommonPayload)
  async updateAnimal(@Args('updateAnimalInput') updateAnimalInput: UpdateAnimalInput): Promise<CommonPayload> {
    return this.animalService.updateAnimal(updateAnimalInput.id, updateAnimalInput);
  }

  @Mutation(() => CommonPayload)
  async removeAnimal(@Args('id', { type: () => Int }) id: number): Promise<CommonPayload> {
    return this.animalService.removeAnimal(id);
  }

  @Mutation(() => CommonPayload)
  async createAnimal(@Args('createAnimalInput') createAnimalInput: CreateAnimalInput): Promise<CommonPayload> {
    return this.animalService.create(createAnimalInput);
  }
}
