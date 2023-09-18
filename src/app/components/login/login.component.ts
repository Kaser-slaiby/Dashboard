import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/Services/auth.service';
import { TokenService } from 'app/Services/token.service';
// import { Router } from 'express';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent {

  constructor(private Auth: AuthService,
    private Token: TokenService,
    private router: Router,
    // private route: ActivatedRoute
  ) {

  }

  public error = null



  onSubmit() {
    this.Auth.login(this.form).subscribe(
      data => this.handleResponse(data)
      // data => console.log(data),
      // error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.router.navigateByUrl('dashboard');
    // this.Token.handle(data.access_token)
  }

  handleError() {
    this.error = this.error.error
  }

  public form = {
    email: null,
    password: null
  }

}
