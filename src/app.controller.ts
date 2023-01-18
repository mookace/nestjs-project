import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';

@Controller()
export class AppController {
  @Get()
  getUser() {
    return { name: 'mukesh', email: 'mukesh@gmail.com' };
  }
  @Get('/user')
  getUser1() {
    return { name: '111111', email: 'mukesh@gmail.com' };
  }
}
