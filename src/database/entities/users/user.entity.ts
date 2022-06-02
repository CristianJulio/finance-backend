// import { documentTypes } from "src/shared/enums/users/user-document-type.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstname: string

  @Column({ nullable: true })
  secondname: string

  @Column()
  first_lastname: string

  @Column()
  second_lastname: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column({ unique: true })
  @Column()
  username: string

  @Column()
  balance: number

  // @Column({ type: "enum", enum: documentTypes, nullable: true })
  // document_type: documentTypes
}