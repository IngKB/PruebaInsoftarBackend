import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255 })
  nombres: string;
  @Column({ type: 'varchar', length: 255 })
  apellidos: string;
  @Column({ type: 'varchar', length: 255 })
  cedula: string;
  @Column({ type: 'varchar', length: 255 })
  correo: string;
  @Column({ type: 'varchar', length: 255 })
  telefono: string;
}
