import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  private urlBase = 'http://localhost:9090/movimientos';

  constructor(private http: HttpClient) { }

  // GET todos los movimientos
  obtenerMovimientos(): Observable<any> {
    return this.http.get(this.urlBase);
  }

  // GET movimiento por id
  obtenerMovimiento(id: number): Observable<any> {
    return this.http.get(`${this.urlBase}/${id}`);
  }

  // POST crear movimiento
  crearMovimiento(movimiento: any): Observable<any> {
    return this.http.post(this.urlBase, movimiento);
  }

  // PUT actualizar movimiento
  actualizarMovimiento(id: number, movimiento: any): Observable<any> {
    return this.http.put(`${this.urlBase}/${id}`, movimiento);
  }

  // DELETE eliminar movimiento
  eliminarMovimiento(id: number): Observable<any> {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}