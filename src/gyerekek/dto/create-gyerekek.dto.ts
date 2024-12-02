import { IsBoolean, IsNotEmpty } from "class-validator"

export class CreateGyerekekDto {
  @IsNotEmpty()
  nev: string
  @IsNotEmpty()
  cim: string
  @IsBoolean()
  jovolte: boolean
}
