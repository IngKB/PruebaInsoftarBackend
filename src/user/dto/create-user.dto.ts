import { IsNotEmpty, IsString, IsAlpha, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  nombres: string;
  @IsString()
  apellidos: string;
  @IsAlpha()
  @IsString()
  cedula: string;
  @IsString()
  @IsEmail()
  correo: string;
  @IsAlpha()
  @IsString()
  telefono: string;
}
