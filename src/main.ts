// import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

//   const config = new DocumentBuilder()
//     .setTitle('Library Management API')
//     .setDescription('API to manage books in a library')
//     .setVersion('1.0')
//     .build();
//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('api', app, document);

//   await app.listen(process.env.PORT || 3000);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { createServer, proxy } from '@vendia/serverless-express';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.init();
}

bootstrap();

export const handler = createServer(expressApp);

