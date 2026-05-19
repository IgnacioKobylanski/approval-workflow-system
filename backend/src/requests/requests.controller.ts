import { Controller, Get, Post, Body, Patch, Param, ParseIntPipe, Delete, Req, UseGuards } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto'
import { UpdateRequestStatusDto } from './dto/update-request-status.dto';
import { ApiOkResponse, ApiTags, ApiOperation, ApiParam, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';

@ApiTags('requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las solicitudes', description: 'Retorna un array con todas las solicitudes de la base de datos.' })
  @ApiOkResponse({ 
    description: 'Lista obtenida con éxito.',
    type: [CreateRequestDto] 
  })
  findAll() {
    return this.requestsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una solicitud por ID' })
  @ApiParam({ name: 'id', description: 'ID numérico de la solicitud', example: 1 })
  @ApiOkResponse({ description: 'Solicitud encontrada.', type: CreateRequestDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.requestsService.findOne(id);
  }

 @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear una nueva solicitud' })
  @ApiCreatedResponse({ description: 'La solicitud ha sido creada correctamente.', type: CreateRequestDto })
  create(@Body() createRequestDto: CreateRequestDto, @Req() req: any) {
    const userId = req.user.id || req.user.sub;

    const requestData = {
      ...createRequestDto,
      user: { id: userId } as User
    };

    return this.requestsService.create(requestData);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Actualizar el estado de una solicitud', description: 'Permite aprobar o rechazar una solicitud específica.' })
  @ApiParam({ name: 'id', description: 'ID de la solicitud a actualizar' })
  @ApiOkResponse({ description: 'Estado actualizado correctamente.' })
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateRequestStatusDto,
  ) {
    return this.requestsService.updateStatus(id, updateDto.status);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una solicitud' })
  @ApiParam({ name: 'id', description: 'ID de la solicitud a borrar' })
  @ApiOkResponse({ description: 'Solicitud eliminada con éxito.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.requestsService.remove(id);
  }
}