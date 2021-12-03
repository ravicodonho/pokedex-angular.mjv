import { TestBed } from '@angular/core/testing';

import { RandomcolorService } from './randomcolor.service';

describe('RandomcolorService', () => {
  let service: RandomcolorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomcolorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
