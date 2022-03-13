/**
 *  esta el registro del usuario 
 * 
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {

  public formSubmitted = false;
  // cuando inicio  el formulario para registrarme por defecto va aparecer  el campo ya lleno
  // para facilitar  la creacion del usuario pero se puede borar o poner la informacion que desee
  public registerForm = this.fb.group({
    nombre: ['Yeferson', Validators.required ],
    email: ['yefer100@gmail.com', [ Validators.required, Validators.email ] ],
    password: ['123456', Validators.required ],
    password2: ['123456', Validators.required ],
    terminos: [ true, Validators.required ],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor( private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private router: Router ) { }

  crearUsuario() {
    this.formSubmitted = true;
    console.log( this.registerForm.value );

    if ( this.registerForm.invalid ) {
      return;
    }

    // Realizar el posteo
    this.usuarioService.crearUsuario( this.registerForm.value )
        .subscribe( resp => {
          
          // Navegar al Dashboard o gamer inicio
          this.router.navigateByUrl('/');

        }, (err) => {
          // Si sucede un error
          Swal.fire('Error', err.error.msg, 'error' );
        });


  }
  // si es campo no es valido 
  campoNoValido( campo: string ): boolean {
    
    if ( this.registerForm.get(campo).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }
  // si la contraseña no es correcta validacion 
  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }
   // aceptacion de terminos 
  aceptaTerminos() {
    return !this.registerForm.get('terminos').value && this.formSubmitted;
  }
  // si las contraseñas con iguales  o no 
  passwordsIguales(pass1Name: string, pass2Name: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({ noEsIgual: true })
      }


    }
  }

}
