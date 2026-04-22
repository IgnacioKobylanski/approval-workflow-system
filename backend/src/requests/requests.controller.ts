import { Controller, Get, Post, Body } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { Request } from './request.entity';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get() // GET /requests
  getAll() {
    return this.requestsService.findAll();
  }

  @Post() // POST /requests
  create(@Body() body: any) {
    return this.requestsService.create(body);
  }
}