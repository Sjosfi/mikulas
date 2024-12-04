import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateJatekokDto } from './dto/create-jatekok.dto';
import { UpdateJatekokDto } from './dto/update-jatekok.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JatekokService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }
  create(createJatekokDto: CreateJatekokDto) {
    return this.db.jatek.create({
      data: createJatekokDto,
    });
  }

  findAll() {
    return this.db.jatek.findMany();
  }

  async findOne(id: number) {
    const findone = await this.db.jatek.findUnique({
      where: {
        id: id,
      },
    });

    if (!findone) {
      throw new NotFoundException('No toy with ID ' + id);
    } else {
      return findone;
    }
  }

  update(id: number, updateJatekokDto: UpdateJatekokDto) {
    return this.db.jatek.update({
      where: {
        id: id,
      },
      data: updateJatekokDto,
    });
  }

  async remove(id: number) {
    try {
      await this.db.jatek.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
