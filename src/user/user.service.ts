import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<CreateUserResponse> {
    const userCedula = await this.findbyCedula(createUserDto.cedula);
    const userEmail = await this.findbyEmail(createUserDto.correo);
    if (!userCedula) {
      if (!userEmail) {
        const post = this.userRepository.create({ ...createUserDto });
        const user = await this.userRepository.save(post);
        return { message: 'Creado con exito', data: user };
      }
      return { message: 'Correo ya se encuentra registrado', data: null };
    }
    return { message: 'Cédula ya se encuentra registrada', data: null };
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException('Usuario no existe');
    return user;
  }

  async findbyEmail(mail: string) {
    const user = await this.userRepository.findOne({ where: { correo: mail } });
    return user;
  }

  async findbyCedula(ced: string) {
    const user = await this.userRepository.findOne({ where: { cedula: ced } });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    const editedUser = Object.assign(user, updateUserDto);
    return await this.userRepository.save(editedUser);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return await this.userRepository.remove(user);
  }
}

export interface CreateUserResponse {
  message: string;
  data: User;
}
