import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  users;
  constructor(private userService : DataServiceService) { }

  ngOnInit(): void {
    this.userService.getPayment().subscribe(
      (response)=>{
        this.users=response;
      }
    )
  }

}
