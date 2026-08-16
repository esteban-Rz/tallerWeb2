import { TestBed } from '@angular/core/testing';

import { ApiH } from './api-h';

describe('ApiH', () => {
  let service: ApiH;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiH);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
