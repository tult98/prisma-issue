import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Controller('books')
export class BooksController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async findAll() {
    const publishers = await this.prismaService.publishers.findMany({
      where: { location: 'Hanoi' },
    });

    const publisherIds = publishers.map((publisher) => publisher.id);

    const books = await this.prismaService.books.findMany({
      where: {
        publisherId: { in: publisherIds },
      },
      include: {
        category: true,
      },
    });

    let publishedBookNumber = 0;
    let totalBookNumber = 0;

    books.forEach(() => {
      const filteredBooks = books.filter(
        (book) => book.category.name === 'Science',
      );
      publishedBookNumber += filteredBooks.filter(
        (book) => book.isPublished,
      ).length;
      totalBookNumber += filteredBooks.length;
    });

    return { publishedBookNumber, totalBookNumber };
  }
}
