import { CanActivateFn } from '@angular/router';

export const controlEntradaGuard: CanActivateFn = (route, state) => {
  
  /**
   * 
   * 
   * return usuario.estaLoggeado
   * 
   */
  
  return true;
};
