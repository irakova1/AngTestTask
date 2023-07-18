import { TestBed } from '@angular/core/testing';

import { DayListService } from './day-list.service';

describe('DayListService', () => {
  let service: DayListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
