import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

import { JwtAuthGuard } from 'src/util/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private taskServices: TasksService) {}
  @Get('/:id')
  async getTasks(@Param('id') id: string) {
    const data = await this.taskServices.getTasks(id);
    
    return { success: true, data };
  }
  @Post('/')
  async createTask(@Body() taskData: Task) {
    const newTask = this.taskServices.createTask(taskData);
    return newTask;
  }
  @Put('/:id')
  async updateTask(
    @Param('id') id: number,
    @Body() taskData: Partial<Task>,
  ): Promise<Task | null> {
    delete taskData['!nativeeditor_status'];
    return await this.taskServices.updateTask(id, taskData);
  }

  @Delete('/:id')
  async deleteTask(@Param() id: number): Promise<void> {
    await this.taskServices.deleteTask(id);
  }
}
