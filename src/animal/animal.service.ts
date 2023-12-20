import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAnimalInput } from './dto/create-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';
import { AnimalActions } from './animal-actions.interface';
import { Animal } from './entities/animal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { CommonPayload } from './dto/common.dto';
import { GetAllAnimalsPayload } from './dto/get-all-animals.dto';
import { GetAllAnimalsInput } from './dto/get-all-animals.input';

@Injectable()
export class AnimalService implements AnimalActions{
  constructor(
    @InjectRepository(Animal) private animalRepo: Repository<Animal>
  ) {}

  async getAnimalById(id: number): Promise<Animal> {
    try {
      const animal = await this.animalRepo.findOne({
        where: {
          id,
          deletedAt: IsNull()
        },
      })

      return animal
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async eat(id: number): Promise<Animal> {
    try{
      const animal = await this.getAnimalById(id);
      animal.weight = animal.weight + 0.1;
      await this.animalRepo.save(animal);

      return animal;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async sleep(id: number): Promise<Animal> {
    try{
      const animal = await this.getAnimalById(id);
      animal.age = animal.age + 1;
      await this.animalRepo.save(animal);

      return animal;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async speak(id: number,): Promise<CommonPayload> {
    try{
      const animal = await this.getAnimalById(id);

      return { message: `${animal.verse}` };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getAll(getAllAnimalsInput: GetAllAnimalsInput): Promise<GetAllAnimalsPayload> {
    try{
      const { limit = 20, page = 0} = getAllAnimalsInput;
      const [allAnimals, count] = await this.animalRepo.findAndCount({
        skip: page * limit,
        take: limit,
        where: {
          deletedAt: IsNull()
        }
      });

      return {
        animals: allAnimals,
        count: count
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateAnimal(id: number, updateAnimalInput: UpdateAnimalInput): Promise<CommonPayload> {
    try{
      let animal = await this.getAnimalById(id);

      animal = await this.animalRepo.save({
        ...animal,
        ...updateAnimalInput,
      });

      return { message: 'Animal updated successfully!' };
    } catch(error) {
      throw new InternalServerErrorException(error);
    }
  }

  async removeAnimal(id: number): Promise<CommonPayload> {
    try {
      await this.animalRepo.update({ id }, { deletedAt: new Date() })

      return { message: "Animal deleted Successfully!" };
    } catch(error) {
      throw new InternalServerErrorException(error);
    }
  }

  async create(createAnimalInput: CreateAnimalInput): Promise<CommonPayload> {
    try {
      await this.animalRepo.save({
        ...createAnimalInput,
      })

      return { message: "Animal created Successfully!" };
    } catch(error){
      throw new InternalServerErrorException(error);
    }
  }
}
