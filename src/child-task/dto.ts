export class TaskData {
  nativeeditor_status?: string;
  $calculate_duration?: boolean;
  $dataprocessor_class?: string;
  $effective_calendar?: string;
  $expanded_branch?: boolean;
  $index?: number;
  $level?: number;
  $local_index?: number;
  $no_end?: boolean;
  $no_start?: boolean;
  $open?: boolean;
  $rendered_parent?: number;
  $rendered_type?: string;
  $resourceAssignments?: any[];
  $source?: any[];
  $target?: any[];
  duration?: number;
  end_date?: Date;
  id: string | number;
  parent?: number;
  progress?: number;
  start_date?: Date;
  text: string;
}
