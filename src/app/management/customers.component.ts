import { Component, OnInit } from '@angular/core';
import { DataService } from 'service/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  users: any;
  constructor(private dataService: DataService) { }



  ngOnInit() {
  }

  getCustomersData() {
    this.dataService.getCustomerList().subscribe(res => {
      console.log(res)
    })
  }

}
