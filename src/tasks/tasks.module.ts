import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Link } from 'src/link/link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Link])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
