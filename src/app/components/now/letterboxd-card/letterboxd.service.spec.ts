import { TestBed } from '@angular/core/testing';

import { LetterboxdService } from './letterboxd.service';

describe('LetterboxdService', () => {
  let service: LetterboxdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterboxdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
