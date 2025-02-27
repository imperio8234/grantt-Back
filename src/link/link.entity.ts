import { Task } from 'src/tasks/task.entity';
import { UserEntity } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';

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

  @ManyToOne(() => UserEntity, (user) => user.links, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
  
}
