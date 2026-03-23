import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  findAll(page: number, limit: number) {
    return this.repo.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  findOne(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.repo.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
