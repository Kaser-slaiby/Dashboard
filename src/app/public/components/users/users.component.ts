import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
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
      // console.log(res)
    })

  }
}
