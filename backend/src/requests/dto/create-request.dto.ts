import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRequestDto {
  @ApiProperty({ 
    description: 'El título de la solicitud', 
    example: 'Licencia por estudio' 
  })
  @IsString()
  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  title!: string;

  @ApiProperty({ 
    description: 'Explicación detallada del pedido', 
    example: 'Solicito el día para rendir Metodología de Sistemas' 
  })
  @IsString()
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  description!: string;
}