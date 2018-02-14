import { TestBed, inject } from '@angular/core/testing';

import { SortCoinsService } from './sort-coins.service';

describe('SortCoinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortCoinsService]
    });
  });

  it('should be created', inject([SortCoinsService], (service: SortCoinsService) => {
    expect(service).toBeTruthy();
  }));
});
