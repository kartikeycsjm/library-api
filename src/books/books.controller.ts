import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiOperation } from '@nestjs/swagger';
@ApiTags('Books')
@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('books')
  @ApiOperation({ summary: 'Add a new book to the library' })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get('books')
  @ApiOperation({ summary: 'Get a paginated list of all books' })
  findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.booksService.findAll(Number(page), Number(limit));
  }

  @Get('books/:id')

  @ApiOperation({ summary: 'Get a book by its ID' })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Put('books/:id')
  @ApiOperation({ summary: 'Update a book\'s details' })
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete('books/:id')
  @ApiOperation({ summary: 'Delete a book by ID' })
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search books by title, author, or genre (fuzzy, case-insensitive)' })
  search(@Query('q') query: string) {
    return this.booksService.search(query);
  }
}
