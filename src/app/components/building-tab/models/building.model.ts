import { BuildingsEnum } from './buildings.enum';

export interface Building {
  id: number;
  name: string;
  type: BuildingsEnum;
}
