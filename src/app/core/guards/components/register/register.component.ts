import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;
  submitted = false;
  name:any;
  email: any;
  password:any;
  
  constructor(private formBuilder: FormBuilder) {}

  createForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit() : void {
    this.createForm
  }

  get f() {
    return this.form.controls
  }

  submit() {
    this.submitted = true
    if (this.form.invalid){
      return  
    }
  }

}
