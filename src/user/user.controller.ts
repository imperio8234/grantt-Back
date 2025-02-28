import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';
import { paswordManager } from 'src/util/password';
import { UserEntity } from './user.entity';
import { v4 as uuidv4 } from 'uuid';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private passManager: paswordManager,
    private readonly jwtService: JwtService
) {}

  @Post('/')
  async login(@Body() user: UserEntity, res: Response) {
    user.idUser = uuidv4();
    const getUser = await this.userService.getUser(user.name);
    console.log('usuario ingresando');
    if (getUser) {
      const isPasswordValid = await this.passManager.verifyPassword(
        user.password,
        getUser.password,
      );

      if (isPasswordValid) {
        delete getUser.password;

        const payload = { username: getUser.name, sub: getUser.idUser };
        const token = this.jwtService.sign(payload);
        console.log('usuario verificado se enviaran los datos');
        return {
          message: 'Usuario verificado',
          user: getUser,
          token: token,
          success: true
        };
      }
      console.log('contraseña icorrecta');
      return {
        success: false,
        message: 'Contraseña incorrecta',
      };
    } else {
      console.log('creando usuario');
      const encryptedPassword = await this.passManager.encriptPaswoord(
        user.password,
      );
      user.password = encryptedPassword;

      const saveUser = await this.userService.createUser(user);
      
      const payload = { username: saveUser.name, sub: saveUser.idUser };
      const token = this.jwtService.sign(payload);



      return {
        success: true,
        message: 'Usuario creado exitosamente',
        user: saveUser,
        token: token
      };
    }
  }
}
