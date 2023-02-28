import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested
} from 'class-validator';
import { AddressDto } from './address.dto';

export class CustomerDto {
  @IsNumber()
  id: number;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}
