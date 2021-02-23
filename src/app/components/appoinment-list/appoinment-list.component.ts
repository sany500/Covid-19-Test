import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit {
  date: Date
  users: User[];
  approveObj = {
    name: '',
    age: '',
    email: '',
    mobile: '',
    gender: '',
    address: '',
    date: ''
  }
  constructor(private userService: DataServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
        this.approveAppoint;
      });
  }
  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  approveAppoint(approve) {

    this.approveObj = approve;
    this.userService.hiddenAppoint(this.approveObj);
    alert("Approved");

  }

}
