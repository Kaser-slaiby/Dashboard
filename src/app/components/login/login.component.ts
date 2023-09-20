import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/Services/auth.service';
import { TokenService } from 'app/Services/token.service';
// import { Router } from 'express';
// import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent {
  title = 'app Works!';
  person

  constructor(private Auth: AuthService,
    private Token: TokenService,
    private router: Router,
    // http: HttpClient
    // private route: ActivatedRoute
  ) {

  }


  // fetchDataFromServer() {
  //   this.person =
  //     this.http.get('/kaser.sy/login').map(res =>
  //       res.json());
  // }

  public error = null



  onSubmit() {
    this.Auth.login(this.form).subscribe(
      // data => this.handleResponse(data)
      data => console.log(data),
      // error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.router.navigateByUrl('dashboard');
    this.Token.handle(data.access_token)
  }

  handleError() {
    this.error = this.error.error
  }

  public form = {
    email: null,
    password: null
  }

}
