import { IsString, IsBoolean, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  gender: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  address: string;

  @IsBoolean()
  isWhatsappAvailable: boolean;

  @IsArray()
  visitDays: string[];
}
