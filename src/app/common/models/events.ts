export interface CalendarEvent {
  [key: string]: DescEvent[];
}

export interface DescEvent {
  hour?: number;
  title: string;
  description: string;
}

export interface SelectedEvent {
  hour: number;
  date: string;
  index?: number;
}
