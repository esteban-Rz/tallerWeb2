import { Component } from '@angular/core';
import { MovimientoService } from '../../services/movimiento.server';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-tabla',
  imports: [NgForOf],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class Tabla {
  movimientos: any[] = [];
  constructor(private movimientoService: MovimientoService) {}
  ngOnInit(): void {
  this.movimientoService.obtenerMovimientos().subscribe(
  data => {
    this.movimientos = data;
      console.log(data);
  },
  error => {
      console.error(error);
  }
  );

}
}
