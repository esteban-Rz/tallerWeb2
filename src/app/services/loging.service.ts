import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface LoginResponse {
    access_token: string;
    user: { id: number; email: string; [key: string]: unknown };
}


@Injectable({ providedIn: 'root' })
export class LogingService {
private http = inject(HttpClient);
 private readonly API_URL = 'http://localhost:3000';
 login(email: string, password: string): Observable<LoginResponse> {
 return this.http.post<LoginResponse>(`${this.API_URL}/login`, { email, password });
 }
 register(email: string, password: string): Observable<LoginResponse> {
 return this.http.post<LoginResponse>(`${this.API_URL}/register`, { email, password });
 }


}
