import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  userData;
  
  constructor( private loginService : DataServiceService, private router : Router) { }

  ngOnInit(): void {
  }
  validLogin(data){
    this.loginService.validLogin(data).subscribe(
      (response)=>{
        this.userData=response;
        for(let i=0;i<this.userData.length;i++){
          if(data.email==this.userData[i].email && data.password==this.userData[i].password){
            this.router.navigate(['/dashbord']);
          }else{
            alert("Email or Password wrong try again")
          }
        }
      }
    )
  }
}
