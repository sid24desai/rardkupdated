import { TestBed } from '@angular/core/testing';

import { SerializdService } from './serializd.service';

describe('SerializdService', () => {
  let service: SerializdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerializdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
