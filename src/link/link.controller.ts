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
import { LinkService } from './link.service';
import { LinkData } from './dto';
import { JwtAuthGuard } from 'src/util/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('link')
export class LinkController {
  constructor(private linkServices: LinkService) {}

  
  @Get('/:id')
  async getLinks(@Param('id') id: string) {
    const data = await this.linkServices.getLink(id);
    return { success: true, data };
  }


  @Post('/')
  async createLink(@Body() taskData: LinkData) {
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
