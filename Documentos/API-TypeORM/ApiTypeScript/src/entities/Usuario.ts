import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
class Usuario{
    @PrimaryColumn()
    id:string

    @Column()
    name:string

    @Column()
    email: string
}
export { Usuario }