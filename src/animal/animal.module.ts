import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalResolver } from './animal.resolver';
import { Animal } from './entities/animal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Animal])
  ],
  providers: [AnimalResolver, AnimalService],
  exports: []

})
export class AnimalModule {}
