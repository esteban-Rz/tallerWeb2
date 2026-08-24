import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
// trabajo es dejar pasar solo aquien NO tiene sesión iniciada
export const guestGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

 if (!auth.isLoggedIn()) {
 return true;
 }
 router.navigate(['home']);
 return false;



};
