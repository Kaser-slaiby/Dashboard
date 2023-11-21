import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.getUsersData();
  }
  getUsersData() {
    this.userservice.getData().subscribe(res => {
      this.users = res;
      // console.log(res)
    })

  }

}
