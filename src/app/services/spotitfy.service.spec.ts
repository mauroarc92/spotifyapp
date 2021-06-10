import { TestBed } from '@angular/core/testing';

import { SpotitfyService } from './spotitfy.service';

describe('SpotitfyService', () => {
  let service: SpotitfyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotitfyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
