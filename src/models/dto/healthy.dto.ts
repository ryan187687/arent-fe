export interface HealthyDTO {
  id: number;
  created_at: string;
  updated_at: string;
  type: 'Morning' | 'Lunch' | 'Dinner' | 'Snack';
  image: string;
}
