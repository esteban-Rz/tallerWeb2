import { Component, inject, signal } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router, RouterLink } from '@angular/router';
import { ApiH } from '../../services/api-h';

@Component({
  selector: 'app-productos',
  imports: [RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
servicio = inject (ApiH)
  heroes = signal <any []> ([]);
  ngOnInit(): void {
    this.servicio.getApiH().subscribe({
      next: (e) => {
        this.heroes.set(e);
      },
      error: (err) => {
        console.error("error al obtener personajes", err)
      }
    });
  }
}
