import { Module } from '@nestjs/common';
import { ChildTaskController } from './child-task.controller';
import { ChildTaskService } from './child-task.service';

@Module({
  controllers: [ChildTaskController],
  providers: [ChildTaskService]
})
export class ChildTaskModule {}
