import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import { SessionMiddleware } from './modules/auth/session.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { LogsModule } from './modules/logs/logs.module';
import { BlogsModule } from './modules/blogs/blogs.module';
import { ImagesModule } from './modules/images/images.module';
import { FaqsModule } from './modules/faqs/faqs.module';
import { EmailModule } from './modules/email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SharedModule,
    LogsModule,
    ImagesModule,
    AuthModule,
    UsersModule,
    BlogsModule,
    FaqsModule,
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SessionMiddleware).forRoutes('*');
  }
}
