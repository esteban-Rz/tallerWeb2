import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const productGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  return auth.isLoggedIn ();
};
