import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  handle(token: any) {
    this.set(token)
  }

  set(token: any) {
    localStorage.setItem('token', token)
  }
}
