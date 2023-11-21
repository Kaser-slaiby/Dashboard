import { Component } from '@angular/core';
import { CustomersService } from '../../../core/services/customers/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

  customers: any;
  constructor(private customersservice: CustomersService) { }

  ngOnInit() {
    this.getcustomersData();
  }
  getcustomersData() {
    this.customersservice.getData().subscribe(res => {
      this.customers = res;
      // console.log(res)
    })

  }
}
