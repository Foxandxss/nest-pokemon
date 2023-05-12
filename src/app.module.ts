import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    PokemonModule,
    CommonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    SeedModule,
  ],
})
export class AppModule {}
