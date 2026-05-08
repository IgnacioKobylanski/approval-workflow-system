import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';


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

  @ManyToOne(() => User, (user) => user.requests)
  user!: User;
}