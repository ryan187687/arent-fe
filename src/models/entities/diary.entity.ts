export interface DiaryEntity {
  id: number;
  title: string;
  description: string;
  date: string; // formatted: 'yyyy.mm.dd'
  time: string; // formatted: 'hh:mm'
}
