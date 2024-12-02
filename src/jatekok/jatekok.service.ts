import { Injectable } from '@nestjs/common';
import { CreateJatekokDto } from './dto/create-jatekok.dto';
import { UpdateJatekokDto } from './dto/update-jatekok.dto';

@Injectable()
export class JatekokService {
  create(createJatekokDto: CreateJatekokDto) {
    return 'This action adds a new jatekok';
  }

  findAll() {
    return `This action returns all jatekok`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jatekok`;
  }

  update(id: number, updateJatekokDto: UpdateJatekokDto) {
    return `This action updates a #${id} jatekok`;
  }

  remove(id: number) {
    return `This action removes a #${id} jatekok`;
  }
}
