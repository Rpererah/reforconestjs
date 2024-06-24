import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  create(dto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      ...dto,
    };
    return this.prisma.user.create({
      data,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateUserDto) {
    const data: Prisma.UserUpdateInput = {
      ...dto,
    };
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    this.prisma.user.delete({ where: { id } });
    return 'user removed with success';
  }
}
