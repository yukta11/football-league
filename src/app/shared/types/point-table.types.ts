export interface PointTableModel {
  id?: number;
  position?: number;
  team: string;
  played: number;
  win: number;
  draw: number;
  loss: number;
  goalsFor?: number;
  goalsAgainst?: number;
  points: number;
  imagepath: string;
}
