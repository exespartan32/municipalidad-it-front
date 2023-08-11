import { Component } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecoverService } from '../../../services/recover.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})

  export class RecoverPasswordComponent {
    recoverForm!: FormGroup;


    constructor( private _recoverService: RecoverService, 
      private formBuilder: FormBuilder,) { }

    ngOnInit() {
      this.recoverForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
      })}
  
  recover(){
    console.log(this.recoverForm.value);
    this._recoverService.recover(this.recoverForm.value).subscribe( dato =>{})
  }
  
  }
  
  