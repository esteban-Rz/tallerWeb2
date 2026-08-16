import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class ApiH {
    private http = inject(HttpClient);
    private API_Heroes= "https://akabab.github.io/superhero-api/api/all.json"
    getApiH (): Observable<any>{
        return this.http.get(this.API_Heroes)
    }
}
