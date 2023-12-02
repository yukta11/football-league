import { PointTableModel } from 'src/app/shared/types/point-table.types';

export interface pointTableState {
  loading: boolean;
  pointTable: PointTableModel[];
  error: string;
}

export const initalState: pointTableState = {
  loading: false,
  pointTable: [],
  error: '',
};
