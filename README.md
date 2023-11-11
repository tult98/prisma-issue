## Description

A repo to reproduce the error in prisma

## Installation

```bash
$ yarn install
```

## Running the app

1. Get the database up and running

```bash
$ docker compose up -d
```

2. Start the application

```bash
# watch mode
$ yarn run start:dev
```

3. Seeding the database

```bash
$ npx prisma db seed
```
