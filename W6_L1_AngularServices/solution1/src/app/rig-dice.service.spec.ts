import { TestBed } from '@angular/core/testing';

import { RigDiceService } from './rig-dice.service';

describe('RigDiceService', () => {
  let service: RigDiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RigDiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
