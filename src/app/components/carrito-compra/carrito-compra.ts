import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-compra',
  imports: [],
  templateUrl: './carrito-compra.html',
  styleUrl: './carrito-compra.css',
})
export class CarritoCompra {
  private auth = inject(Auth);
 private router = inject(Router);
 cerrarSesion(): void {
 this.auth.logout();
 this.router.navigate(['home']);
 }

}
