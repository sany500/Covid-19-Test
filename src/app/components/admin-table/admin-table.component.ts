import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  users: User[];
  constructor( private userService: DataServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  }
  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };
  
}
