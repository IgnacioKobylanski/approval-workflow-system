import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from './request.entity';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private requestsRepository: Repository<Request>,
  ) {}

  findAll(): Promise<Request[]> {
    return this.requestsRepository.find();
  }

  create(data: Partial<Request>): Promise<Request> {
    const newRequest = this.requestsRepository.create(data);
    return this.requestsRepository.save(newRequest);
  }

  async updateStatus(id: number, status: string) {
  const request = await this.requestsRepository.findOneBy({ id });
  if (!request) {
    throw new Error('La solicitud no existe');
  }
  await this.requestsRepository.update(id, { status });
  return this.requestsRepository.findOneBy({ id });
  }

  async findOne(id: number) {
  const request = await this.requestsRepository.findOneBy({ id });
  if (!request) throw new NotFoundException(`La solicitud #${id} no existe`);
  return request;
}

async remove(id: number) {
  const request = await this.findOne(id);
  await this.requestsRepository.remove(request);
  return { deleted: true };
}
}