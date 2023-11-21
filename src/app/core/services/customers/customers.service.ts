import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('cp/city/customer/list');

  }

  // getCustomerList() {
  //   return this.httpClient.get('cp/user/list')
  // }

}
