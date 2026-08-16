import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiH } from '../../services/api-h';

@Component({
  selector: 'app-catalogo-super-heroes',
  imports: [],
  templateUrl: './catalogo-super-heroes.html',
  styleUrl: './catalogo-super-heroes.css',
})
export class CatalogoSuperHeroes implements OnInit{

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
