import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const isNotLoggedInGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService)

  if(cookieService.check('user')){
    return false
  }
  else{
    return true
  }
  
};
