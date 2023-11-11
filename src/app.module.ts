import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, BooksController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
