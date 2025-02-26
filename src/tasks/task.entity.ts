import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string | number;

  @Column({ type: 'varchar' })
  nativeeditor_status: string;

  @Column({ type: 'boolean' })
  $calculate_duration: boolean;

  @Column({ type: 'varchar' })
  $dataprocessor_class: string;

  @Column({ type: 'varchar' })
  $effective_calendar: string;

  @Column({ type: 'boolean' })
  $expanded_branch: boolean;

  @Column({ type: 'int' })
  $index: number;

  @Column({ type: 'int' })
  $level: number;

  @Column({ type: 'int' })
  $local_index: number;

  @Column({ type: 'boolean' })
  $no_end: boolean;

  @Column({ type: 'boolean' })
  $no_start: boolean;

  @Column({ type: 'boolean' })
  $open: boolean;

  @Column({ type: 'int' })
  $rendered_parent: number;

  @Column({ type: 'varchar' })
  $rendered_type: string;

  @Column('simple-json')
  $resourceAssignments: any[];

  @Column('simple-json')
  $source: any[];

  @Column('simple-json')
  $target: any[];

  @Column({ type: 'int' })
  duration: number;

  @Column({ type: 'varchar' })
  end_date: string;

  @Column({ type: 'int' })
  parent: number;

  @Column({ type: 'float' })
  progress: number;

  @Column({ type: 'varchar' })
  start_date: string;

  @Column({ type: 'varchar' })
  text: string;
}
