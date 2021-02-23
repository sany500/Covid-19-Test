import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-approved-covid-test-list',
  templateUrl: './approved-covid-test-list.component.html',
  styleUrls: ['./approved-covid-test-list.component.css']
})
export class ApprovedCovidTestListComponent implements OnInit {
  userData;

  modalObj = {
    name: '',
    age: '',
    email: '',
    mobile: '',
    gender: '',
    address: '',
    date: '',
    
  }
  constructor(private userService: DataServiceService) { }

  ngOnInit(): void {
    this.showData()
  }
  showData() {
    this.userService.displayApprovedData().subscribe(
      (response) => {
        this.userData = response;

      }
    )
  }

  modalAppoint(data) {
    this.modalObj = data;


  }

  payTest(data) {
    this.userService.modalAppoint(this.modalObj);
    this.modalObj=data;
    alert("Payment Successfull");
  }

}
