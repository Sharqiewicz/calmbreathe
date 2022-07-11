import { TestBed } from '@angular/core/testing';

import { BreathService } from './breath.service';

describe('BreathService', () => {
  let service: BreathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
