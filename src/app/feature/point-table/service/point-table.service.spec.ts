import { TestBed } from '@angular/core/testing';

import { PointTableService } from './point-table.service';

describe('PointTableService', () => {
  let service: PointTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
