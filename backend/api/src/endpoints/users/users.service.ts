import { Injectable } from '@nestjs/common';
import { User } from '../../db/models/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/upload-user.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {
  private users: User[] = []; // Example: In-memory storage, replace with a database

  createUser(createUserDto: CreateUserDto) {
    const newUser = { id: uuidv4(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find(user => user.id === id);
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return NotFoundError;
    this.users[index] = { ...this.users[index], ...updateUserDto };
    return this.users[index];
  }

  removeUser(id: string) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return NotFoundError;
    const removedUser = this.users.splice(index, 1);
    return removedUser;
  }
}