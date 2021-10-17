import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers(): Array<object> {
    return [{ nombre: 'Pedro', apellido: 'Plasencia' }];
  }

  createUser(user): Array<object> {
    return [user];
  }

  updateUser(user, id): Array<object> {
    user.id = id;
    return [user];
  }
}
