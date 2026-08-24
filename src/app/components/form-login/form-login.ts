import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-login',
  imports: [FormsModule,NgIf],
  templateUrl: './form-login.html',
  styleUrl: './form-login.css',
})
export class FormLogin {
  private auth = inject(Auth);
 private router = inject(Router);
 errorMensaje = '';
 cargado = false;
  async login(form: NgForm): Promise <void> {
    this.errorMensaje = "";
    this.cargado = true ;
  console.log(form.value);
    const { email, password } = form.value;
    const exito = await this.auth.login(email,password);
    this.cargado = false ;

  if (exito) {
      this.errorMensaje = '';
    this.router.navigate(['producto']);
   }   else {
    this.errorMensaje = 'Correo o contraseña inválidos';
  }
    }

}
