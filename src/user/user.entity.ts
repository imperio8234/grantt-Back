import { Link } from 'src/link/link.entity';
import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn()
  idUser: string;

  @Column('varchar')
  name: string;
  
  @Column('varchar')
  password: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];

  @OneToMany(() => Link, (link) => link.user)
  links: Link[];
}
