import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private http: HttpClient) {

  }

  onSubmit() {
    console.log(this.form);
  }

  public form = {
    email: null,
    password: null
  }

}
