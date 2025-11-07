export interface HealthyEntity {
  id: number;
  type: 'Morning' | 'Lunch' | 'Dinner' | 'Snack';
  date: string; // formatted: 'mm.dd'
  image: string;
}
