import { Component, OnInit } from '@angular/core';
import { DataService } from 'service/data.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
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