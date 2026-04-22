import { Injectable } from '@nestjs/common';
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
}