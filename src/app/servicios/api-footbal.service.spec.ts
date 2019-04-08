import { TestBed } from '@angular/core/testing';

import { ApiFootbalService } from './api-footbal.service';

describe('ApiFootbalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFootbalService = TestBed.get(ApiFootbalService);
    expect(service).toBeTruthy();
  });
});
