import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { preguntarSalirGuard } from './preguntar-salir.guard';

describe('preguntarSalirGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => preguntarSalirGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
