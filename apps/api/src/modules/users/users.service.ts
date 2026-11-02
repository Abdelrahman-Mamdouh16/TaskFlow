import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async registerUser(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    const isUserExists = await this.prisma.user.findUnique({
      where: { email },
    });
    if (isUserExists) {
      throw new BadRequestException('this email already exists');
    }
    const HashedPassword = bcrypt.hashSync(
      password,
      process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS) : 10,
    );

    const newUser = await this.prisma.user.create({
      data: {
        name,
        email,
        password: HashedPassword,
      },
    });
    return {
      success: true,
      message: 'user created successfully',
      userId: newUser.id,
    };
  }
}
