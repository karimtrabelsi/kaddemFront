import { TestBed } from '@angular/core/testing';

import { DepartementService } from './department.service';

describe('DepartementService', () => {
  let service: DepartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
