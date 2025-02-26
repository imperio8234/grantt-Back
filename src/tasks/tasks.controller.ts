import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { TaskData } from 'src/child-task/dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskServices: TasksService) {}
  @Get('/')
  async getTasks() {
    const data = await this.taskServices.getTasks();
    console.log("se pidieron los datos", data) 
    return { success: true, data };
  }
  @Post('/')
  async createTask(@Body() taskData: Task) {
    console.log(taskData)
    const newTask = this.taskServices.createTask(taskData);
    return newTask;
  }

  async updateTask(id: number, taskData: Partial<Task>): Promise<Task | null> {
    return await this.taskServices.updateTask(id, taskData);
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskServices.deleteTask(id);
  }
}
