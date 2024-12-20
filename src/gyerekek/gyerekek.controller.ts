import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GyerekekService } from './gyerekek.service';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';

@Controller('gyerekek')
export class GyerekekController {
  constructor(private readonly gyerekekService: GyerekekService) {}

  @Post()
  create(@Body() createGyerekekDto: CreateGyerekekDto) {
    return this.gyerekekService.create(createGyerekekDto);
  }

  @Get()
  findAll() {
    return this.gyerekekService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gyerekekService.findOne(+id);
  }

  @Put(':id/jatekok/:jatekId')
  addToy(@Param('id') id: string, @Param('jatekId') jatekId: string) {
    return this.gyerekekService.jatekHozzaAdas(+id, +jatekId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGyerekekDto: UpdateGyerekekDto) {
    return this.gyerekekService.update(+id, updateGyerekekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gyerekekService.remove(+id);
  }
}
