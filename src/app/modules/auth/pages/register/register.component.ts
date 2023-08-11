import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  hidePassword = true;
  nuevoUsuario! : NuevoUsuario;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  cuil!: string;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) { }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      cuil: ['', Validators.required],
    }, {
      /*validator: MustMatch('password', 'confirmPassword')*/
    });
  }

  register() {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.email, this.email, this.password, this.cuil, true);
    //console.log("this.nuevoUsuario")
    //console.log(this.nuevoUsuario)

    this.registerService.register(this.nuevoUsuario).subscribe(data => {
      console.log(data);
    })

    // Lógica para registrar al usuario

    /*function MustMatch(controlName: string, matchingControlName: string) {
     return (formGroup: FormGroup) => {
         const control = formGroup.controls[controlName];
         const matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
         }
       
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ mustMatch: true });
       } else {
            matchingControl.setErrors(null);
       }
     }
    }*/


    //Validators.pattern('^[0-9]{2}-[0-9]{8}-[0-9]{1}$'
    //Validators.pattern('^[23][670]-[0-9]{8}-[0-9]$'

    /* Registro => CUIL :String 
     ROL => desarrollador : comienza: 20,23,24,27
     ROL => empresa: comienza: 30
     8 caracteres seguidos
     termina un caracter
     ejemplo: empresa: 30-12345678-7

    console.log(this.registerForm.value);
    this.registerService.register(this.registerForm.value).subscribe(dato => {

    })
*/
  }

}
