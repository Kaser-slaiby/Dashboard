import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('cp/user/list');

  }

  getCustomerList() {
    return this.httpClient.get('cp/user/list')
  }

  // getLogin() {
  //   return this.httpClient.get('');

  // }
}
