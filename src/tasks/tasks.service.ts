import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async getTasks(): Promise<Task[]> {
    const tasks = await this.taskRepository.find();
    console.log("services" ,tasks)
    return tasks;
  }

  async getTaskById(id: number): Promise<Task | null> {
    return this.taskRepository.findOne({ where: { id } });
  }

  async createTask(taskData: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepository.create(taskData);
    console.log("se guardaron", newTask)
    return this.taskRepository.save(newTask);
  }

  async updateTask(id: number, taskData: Partial<Task>): Promise<Task | null> {
    await this.taskRepository.update(id, taskData);
    return this.getTaskById(id);
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
