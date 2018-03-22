import { TestBed, inject } from '@angular/core/testing';

import { LocaService } from './loca.service';

describe('LocaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocaService]
    });
  });

  it('should be created', inject([LocaService], (service: LocaService) => {
    expect(service).toBeTruthy();
  }));
});
