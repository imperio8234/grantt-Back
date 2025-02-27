import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { Link } from 'src/link/link.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  
    @InjectRepository(Link)
    private linkRepository: Repository<Link>
  ) {}

  async getTasks(idUser: string): Promise<Task[]> {
    const tasks = await this.taskRepository.find({
      where: { user: { idUser } }
    });
  
  
    return tasks;
  }
  

  async getTaskById(id: number): Promise<Task | null> {
    return this.taskRepository.findOne({ where: { id } });
  }

  async createTask(taskData: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepository.create(taskData);
    
    return this.taskRepository.save(newTask);
  }

  async updateTask(id: number, taskData: Partial<Task>): Promise<Task | null> {
    await this.taskRepository.update(id, taskData);
    return this.getTaskById(id);
  }

  async deleteTask(id: any): Promise<void> {
    await this.taskRepository.delete(id);
    await this.taskRepository.delete({ parent: id });
    await this.linkRepository.delete({ source: id });
  }
}
