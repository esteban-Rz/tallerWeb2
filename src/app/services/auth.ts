import { inject, Injectable, signal } from '@angular/core';
import { LogingService } from './loging.service';
import { firstValueFrom } from 'rxjs';

const TOKEN_KEY = 'access_token';

@Injectable({providedIn:"root"})
export class Auth {
    private logService = inject (LogingService)
    private _isLoggedIn = signal<boolean>(!!sessionStorage.getItem(TOKEN_KEY));
    isLoggedIn = this._isLoggedIn.asReadonly();
    async login (email:string , password:string):Promise<boolean> {
        try {
            const respuesta = await firstValueFrom(this.logService.login(email,password));
            sessionStorage.setItem(TOKEN_KEY, respuesta.access_token);
            this._isLoggedIn.set(true);
            return true;
        } catch {
            return false;
        }

       }
    logout ():void {
        this._isLoggedIn.set(false);
    }
}
