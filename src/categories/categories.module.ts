import { Module } from '@nestjs/common';
import { CategoriesService } from './categories/categories.service';
import { CategoriesController } from './categories/categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorie } from './categories.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Categorie]),
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule { }
