import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/usuarios')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): Array<object> {
    return this.appService.getUsers();
  }

  @Post()
  createUser(@Body() body): Array<object> {
    return this.appService.createUser(body);
  }

  @Put(':id')
  updateUser(@Body() body, @Param() params): Array<object> {
    return this.appService.updateUser(body, params.id);
  }

  @Delete(':id')
  deleteUser(@Param() params): string {
    return params.id;
  }
}
