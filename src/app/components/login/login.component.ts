import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  onSubmit() {
    console.log(this.form);
  }

  public form = {
    email: null,
    password: null
  }

}
