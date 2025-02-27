import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Link } from 'src/link/link.entity';
import { JwtAuthGuard } from 'src/util/auth.guard';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Link]), UserModule],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
