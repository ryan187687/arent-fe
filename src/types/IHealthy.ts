export enum EnumHealthyTypes {
  MORNING = 'Morning',
  LUNCH = 'Lunch',
  DINNER = 'Dinner',
  SNACK = 'Snack',
}

export interface IHealthyFilter {
  id: number;
  name: EnumHealthyTypes;
  icon: React.ReactNode;
}
