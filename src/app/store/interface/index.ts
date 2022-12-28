export interface CourseItem {
  id: string;
  department: string;
  name: string;
}

export interface AppState {
  readonly course: Array<CourseItem>;
}
