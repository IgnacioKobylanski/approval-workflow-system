import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRequestStatusDto {
  @ApiProperty({ 
    example: 'approved', 
    enum: ['approved', 'rejected'],
    description: 'Nuevo estado de la solicitud' 
  })
  @IsEnum(['approved', 'rejected'], {
    message: 'El estado debe ser approved o rejected',
  })
  status!: string;
}