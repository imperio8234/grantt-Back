import { Injectable } from '@nestjs/common';
import { Link } from './link.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Link)
    private linkRepository: Repository<Link>,
  ) {}

  async getLink(id: any): Promise<Link[]> {
    const link = await this.linkRepository.find({
      where: { user: { idUser: id } },
    });
    return link;
  }

  async getLinkById(id: number): Promise<Link | null> {
    return this.linkRepository.findOne({ where: { id } });
  }

  async createLink(taskData: Partial<Link>): Promise<Link> {
    const newLink = this.linkRepository.create(taskData);
    return this.linkRepository.save(newLink);
  }

  async updateTask(id: number, taskData: Partial<Link>): Promise<Link | null> {
    await this.linkRepository.update(id, taskData);
    return this.getLinkById(id);
  }

  async deleteTask(id: number): Promise<void> {
    await this.linkRepository.delete(id);
  }
}
