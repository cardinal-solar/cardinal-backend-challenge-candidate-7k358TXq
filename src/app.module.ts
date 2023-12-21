import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AnimalModule } from './animal/animal.module';
import { dataSourceOptions } from './data-source-options';
const { entities, migrations, ...options } = dataSourceOptions;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    ...options,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './src/schema.gql',
      playground: true,
    }),
    AnimalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
