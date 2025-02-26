import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string | number;

  @Column({ type: 'varchar', nullable: true })
  nativeeditor_status: string;

  @Column({ type: 'boolean', nullable: true })
  $calculate_duration: boolean;

  @Column({ type: 'varchar', nullable: true })
  $dataprocessor_class: string;

  @Column({ type: 'varchar', nullable: true })
  $effective_calendar: string;

  @Column({ type: 'boolean', nullable: true })
  $expanded_branch: boolean;

  @Column({ type: 'int', nullable: true })
  $index: number;

  @Column({ type: 'int', nullable: true })
  $level: number;

  @Column({ type: 'int', nullable: true })
  $local_index: number;

  @Column({ type: 'boolean', nullable: true })
  $no_end: boolean;

  @Column({ type: 'boolean', nullable: true })
  $no_start: boolean;

  @Column({ type: 'boolean', nullable: true })
  $open: boolean;

  @Column({ type: 'int', nullable: true })
  $rendered_parent: number;

  @Column({ type: 'varchar', nullable: true })
  $rendered_type: string;

  @Column('simple-json', { nullable: true })
  $resourceAssignments: any[];

  @Column('simple-json', { nullable: true })
  $source: any[];

  @Column('simple-json', { nullable: true })
  $target: any[];

  @Column({ type: 'int', nullable: true })
  duration: number;

  @Column({ type: 'varchar', nullable: true })
  end_date: string;

  @Column({ type: 'int', nullable: true })
  parent: number;

  @Column({ type: 'float', nullable: true })
  progress: number;

  @Column({ type: 'varchar', nullable: true })
  start_date: string;

  @Column({ type: 'varchar', nullable: true })
  text: string;
}
