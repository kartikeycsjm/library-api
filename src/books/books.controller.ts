import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Books')
@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('books')
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get('books')
  findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.booksService.findAll(Number(page), Number(limit));
  }

  @Get('books/:id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Put('books/:id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete('books/:id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }

  @Get('search')
  search(@Query('q') query: string) {
    return this.booksService.search(query);
  }
}
