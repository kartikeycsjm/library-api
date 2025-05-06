import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
const Fuse = require('fuse.js');
@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

    async create(createBookDto: CreateBookDto): Promise<Book> {
        const createdBook = new this.bookModel(createBookDto);
        return createdBook.save();
    }

    async findAll(page = 1, limit = 10): Promise<Book[]> {
        return this.bookModel
            .find()
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();
    }

    async findOne(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id).exec();
        if (!book) {
            throw new NotFoundException('Book not found');
        }
        return book;
    }

    async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
        const updatedBook = await this.bookModel
            .findByIdAndUpdate(id, updateBookDto, { new: true })
            .exec();
        if (!updatedBook) {
            throw new NotFoundException('Book not found');
        }
        return updatedBook;
    }

    async remove(id: string): Promise<void> {
        const result = await this.bookModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException('Book not found');
        }
    }

    //   async search(query: string): Promise<Book[]> {
    //     const regex = new RegExp(query, 'i'); // case-insensitive regex
    //     return this.bookModel.find({
    //       $or: [
    //         { title: regex },
    //         { author: regex },
    //         { genre: regex },
    //       ],
    //     }).exec();
    //   }
    async search(query: string): Promise<Book[]> {
        // Get all books from the database
        const books = await this.bookModel.find().exec();

        // Define Fuse.js options (you can tweak the threshold for fuzziness)
        const options = {
            keys: ['title', 'author', 'genre'],  // Specify the fields to search
            threshold: 0.3,  // Adjust the threshold for fuzziness (lower is stricter)
        };

        // Create a new Fuse instance
        const fuse = new Fuse(books, options);

        // Perform the fuzzy search
        const result = fuse.search(query);

        // Return the matching books
        return result.map(item => item.item);
    }
}
