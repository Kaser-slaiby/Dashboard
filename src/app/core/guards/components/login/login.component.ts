import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';
import { authGuard } from '../../auth/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  submitted = false;
  data: any;
  token: any

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private tostar: ToastrService) { }

  loginForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    this.loginForm
  }

  get f() {
    return this.form.controls
  }


  submit() {
    this.submitted = true
    if (this.form.invalid) {
      return
    }
    this.loginService.login(this.form.value).subscribe(res => {
      this.data = res;

      console.log(res)
    })

  }
}