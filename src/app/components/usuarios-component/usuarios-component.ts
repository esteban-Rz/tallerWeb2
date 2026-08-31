import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../services/usuario';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-usuarios-component',
  imports: [NgForOf],
  templateUrl: './usuarios-component.html',
  styleUrl: './usuarios-component.css',
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuarioService: Usuario) {}
  ngOnInit(): void {
  this.cargarUsuarios();
  }

  cargarUsuarios(): void {
  this.usuarioService.obtenerUsuarios().subscribe({
  next: (data) => {
  this.usuarios = data;
},
error: (error) => {
console.error('Error al obtener usuarios', error);
}
});
}


}
