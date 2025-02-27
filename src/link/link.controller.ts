import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkData } from './dto';

@Controller('link')
export class LinkController {
  constructor(private linkServices: LinkService) {}

  
  @Get('/')
  async getLinks() {
    const data = await this.linkServices.getLink();
    return { success: true, data };
  }


  @Post('/')
  async createLink(@Body() taskData: LinkData) {
    console.log(taskData);
    const newTask = this.linkServices.createLink(taskData);
    return newTask;
  }


  @Put('/:id')
  async updateLink(
    @Param('id') id: number,
    @Body() taskData: Partial<LinkData>,
  ) {
    return await this.linkServices.updateTask(id, taskData);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: number) {
    await this.linkServices.deleteTask(id);
  }
}
