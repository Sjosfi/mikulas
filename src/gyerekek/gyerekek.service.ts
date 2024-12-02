import { Injectable } from '@nestjs/common';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';

@Injectable()
export class GyerekekService {
  create(createGyerekekDto: CreateGyerekekDto) {
    return 'This action adds a new gyerekek';
  }

  findAll() {
    return `This action returns all gyerekek`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gyerekek`;
  }

  update(id: number, updateGyerekekDto: UpdateGyerekekDto) {
    return `This action updates a #${id} gyerekek`;
  }

  remove(id: number) {
    return `This action removes a #${id} gyerekek`;
  }
}
