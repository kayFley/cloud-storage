import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.com',
  })
  email: string;

  @ApiProperty({
    default: 'Test',
  })
  fullName: string;

  @ApiProperty({
    default: '123',
  })
  password: string;
}
