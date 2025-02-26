import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('links')
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  source: string;

  @Column()
  target: string;

  @Column()
  type: string;

  @Column({ nullable: true })
  nativeeditor_status: string;
}
