import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


export const isNotAuthGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService)
  if(cookieService.check("user")){
    return false
  }else{
    return true
  } 
};
