import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');

  }

  getCustomerList() {
    return this.httpClient.get('http://kaser.sy/api/customer.list')
  }

  // getLogin() {
  //   return this.httpClient.get('');

  // }
}
