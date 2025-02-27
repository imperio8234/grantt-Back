import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepositor: Repository<UserEntity>,
  ) {}

  async getUser(name: string): Promise<UserEntity> {
    const user = await this.userRepositor.findOne({ where: { name: name } });
    return user;
  }

  async getUserById(idUser: string): Promise<UserEntity | null> {
    return this.userRepositor.findOne({ where: { idUser } });
  }

  async createUser(userData: Partial<UserEntity>): Promise<UserEntity> {
    const newUser = this.userRepositor.create(userData);
    return this.userRepositor.save(newUser);
  }

  async updateTask(
    id: any,
    taskData: Partial<UserEntity>,
  ): Promise<UserEntity | null> {
    await this.userRepositor.update(id, taskData);
    return this.getUserById(id);
  }

  async deleteTask(id: string): Promise<void> {
    await this.userRepositor.delete(id);
  }
}
