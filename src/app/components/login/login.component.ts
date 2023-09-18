import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent {

  constructor(private http: HttpClient) {

  }

  public error = null

  onSubmit() {
    return this.http.post('http://kaser.sy/api/login', this.form).subscribe(
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
