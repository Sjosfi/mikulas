import {faker} from '@faker-js/faker'
import {PrismaClient} from '@prisma/client'
import {CreateGyerekekDto} from '../src/gyerekek/dto/create-gyerekek.dto'
import {CreateJatekokDto} from '../src/jatekok/dto/create-jatekok.dto'
const prisma = new PrismaClient
export async function main() {
    const anyagok = ["Fa", "Műanyag", "Fém", "Üveg", "Egyéb"]
    for (let i = 0; i < 10; i++) {
        const ujGyerek: CreateGyerekekDto = {
            nev: faker.person.fullName(),
            cim: faker.location.streetAddress(),
            jovolte: faker.datatype.boolean()
        }
        const ujJatek: CreateJatekokDto = {
            title: faker.vehicle.vehicle(),
            anyag: "Fa",
            suly: Math.floor(Math.random()*100)
        }
        await prisma.gyerek.create({
            data: ujGyerek
          })
          await prisma.jatek.create({
            data: ujJatek
          })

    }
}
main()