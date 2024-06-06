import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { controlEntradaGuard } from './control-entrada.guard';

describe('controlEntradaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => controlEntradaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
