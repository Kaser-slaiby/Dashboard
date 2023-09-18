import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  users: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    this.dataService.getData().subscribe(res => {
      this.users = res;
    })

  }

}
