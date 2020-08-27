import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get()
    index(): string {
        return "This will return categories"
    }
}
