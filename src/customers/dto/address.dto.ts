import { IsNumberString, IsNotEmpty } from 'class-validator';

export class AddressDto {
  @IsNotEmpty()
  line1: string;
  line2?: string;
  @IsNumberString()
  zip: number;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  state: string;
}
