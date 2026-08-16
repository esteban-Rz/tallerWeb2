import th from '@angular/common/locales/extra/th';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  private fb = inject(FormBuilder);
  FormularioContacto = this.fb.group({
      nombre: ["",[Validators.required,Validators.minLength(3)]],
      email: ["",[Validators.required,Validators.email]],
      mensaje:  ["",[Validators.required]]
      })

  onSubmit(){
      if (this.FormularioContacto.valid){
        console.log("datos enviados",this.FormularioContacto.value);
        this.FormularioContacto.reset();

      } else {
          this.FormularioContacto.markAllAsTouched();
      }

  }
}
