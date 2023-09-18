import { Component } from '@angular/core';
import { AuthService } from 'app/Services/auth.service';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent {

  constructor(private Auth: AuthService) {

  }

  public error = null



  onSubmit() {
    this.Auth.login(this.form).subscribe(
      data => console.log(data),
      // error => this.handleError(error)
    )
  }

  handleError() {
    this.error = this.error.error
  }

  public form = {
    email: null,
    password: null
  }

}
