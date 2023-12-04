import { PointTableModel } from 'src/app/shared/types/point-table.types';

export interface pointTableState {
  loading: boolean;
  pointTable: PointTableModel[];
  success: boolean;
  error: string;
}

export const initalState: pointTableState = {
  loading: false,
  pointTable: [],
  success: false,
  error: '',
};
