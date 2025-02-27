import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ChildTaskModule } from './child-task/child-task.module';
import { LinkModule } from './link/link.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';
import { ChildTask } from './child-task/child.entity';
import { Link } from './link/link.entity';
import { UserEntity } from './user/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TasksModule,
    ChildTaskModule,
    LinkModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Task, ChildTask, Link, UserEntity],
      synchronize: true,
      //dropSchema: true
    }),
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el módulo esté disponible en toda la app
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
