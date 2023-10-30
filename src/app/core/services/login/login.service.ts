import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../../environments/environment';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registerUser(data: any) {
    return this.http.post(environment + '/api/register', data);
  }

  login(data: any) {
    return this.http.post(this.API_URL + '/api/login', data)
  }
}
