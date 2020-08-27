import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Categorie } from '../categories.entity';
import { CategoriesService } from '../categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) { }

    @Get()
    index(): Promise<Categorie[]> {
        return this.categoriesService.findAll();
    }

    @Post()
    async create(@Body() categorieData: Categorie): Promise<any> {
        return this.categoriesService.create(categorieData);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() categorieData: Categorie): Promise<any> {
        categorieData.id = Number(id);
        return this.categoriesService.update(categorieData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        return this.categoriesService.delete(id);
    }
}
