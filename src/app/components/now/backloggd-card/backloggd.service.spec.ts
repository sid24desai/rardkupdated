import { TestBed } from '@angular/core/testing';

import { BackloggdService } from './backloggd.service';

describe('BackloggdService', () => {
  let service: BackloggdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackloggdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
