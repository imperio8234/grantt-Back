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

@Module({
  imports: [
    TasksModule,
    ChildTaskModule,
    LinkModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Task, ChildTask, Link],
      synchronize: true,
      //dropSchema: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
