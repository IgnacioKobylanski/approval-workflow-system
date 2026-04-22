import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity('requests')
export class Request {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'Compra de Teclado' })
  @Column()
  title!: string;

  @ApiProperty({ example: 'Se necesita para el sector contable' })
  @Column({ type: 'text' })
  description!: string;

  @ApiProperty({ default: 'pending' })
  @Column({ default: 'pending' })
  status!: string;

  @CreateDateColumn()
  createdAt!: Date;
}