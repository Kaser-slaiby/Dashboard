import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}
   
  registerUser(data) {
    return this.http.post(environment.apiUrl+'/api/register', data);
    }
  
}
