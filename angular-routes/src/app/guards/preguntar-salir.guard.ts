import { CanDeactivateFn } from '@angular/router';

export const preguntarSalirGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return confirm("¿Estás seguro que deseas abandonar la página?")
};
