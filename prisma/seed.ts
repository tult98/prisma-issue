import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createBooksForPublisher = (publisherId: number, categoryId: number) => {
  const bookInputs = [];
  for (let i = 0; i < 1000; i++) {
    bookInputs.push({
      title: `book-${i}_publisher-${publisherId}`,
      isPublished: Math.random() >= 0.5,
      publisherId,
      categoryId,
    });
  }
  return prisma.books.createMany({
    data: bookInputs,
  });
};

async function main() {
  const createCategory = prisma.categories.create({
    data: {
      name: 'Science',
    },
  });

  // create 5k publishers
  const publisherInputs: { name: string; location: string }[] = [];
  for (let i = 0; i < 5000; i++) {
    publisherInputs.push({
      name: `publisher-${i}`,
      location: 'Hanoi',
    });
  }
  const createPublishers = prisma.publishers.createMany({
    data: publisherInputs,
  });

  const createBooksForPublishers = [];

  for (let i = 0; i < 5000; i++) {
    const publisherId = i + 1;
    const categoryId = 1;
    const createBooks = createBooksForPublisher(publisherId, categoryId);
    createBooksForPublishers.push(createBooks);
  }

  await prisma.$transaction([
    createPublishers,
    createCategory,
    ...createBooksForPublishers,
  ]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
