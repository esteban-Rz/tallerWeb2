import { TestBed } from '@angular/core/testing';

import { MovimientoServer } from './movimiento.server';

describe('MovimientoServer', () => {
  let service: MovimientoServer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimientoServer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
