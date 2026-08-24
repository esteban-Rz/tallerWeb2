import { Component, inject, INJECTOR } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  imports: [],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario {
  private auth = inject (Auth);
  private router = inject(Router);

  cerrarSesion(){
    this.auth.logout();
    this.router.navigate(["home"])
  }
}
