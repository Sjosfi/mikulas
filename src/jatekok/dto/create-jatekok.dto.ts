import { IsNotEmpty } from "class-validator"

export class CreateJatekokDto {
  @IsNotEmpty()
  title: string
  @IsNotEmpty()
  anyag: string
  @IsNotEmpty()
  suly: number
}
