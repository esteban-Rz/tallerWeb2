import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class Usuario {
    // OJO: esta URL debe coincidir EXACTAMENTE con el puerto y la ruta
// configurados en tu AutorController de Spring (ver Clase 2).
private urlBase ='http://localhost:9090/usuarios';
constructor(private http: HttpClient) { }
// GET

obtenerUsuarios(): Observable<any> {
return this.http.get(this.urlBase);
}
// GET por id

obtenerUsuario(id: number): Observable<any> {
return this.http.get(`${this.urlBase}/${id}`);
}
// POST
crearUsuario(usuario: any): Observable<any> {

return this.http.post(this.urlBase, usuario);
27
}

// PUT

actualizarUsuario(id: number, usuario: any): Observable<any> {
return this.http.put(`${this.urlBase}/${id}`, usuario);
32
}
// DELETE
eliminarUsuario(id: number): Observable<any> {
return this.http.delete(`${this.urlBase}/${id}`);
}
}
