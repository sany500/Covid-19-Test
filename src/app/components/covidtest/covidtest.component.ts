import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-covidtest',
  templateUrl: './covidtest.component.html',
  styleUrls: ['./covidtest.component.css']
})
export class CovidtestComponent implements OnInit {
  addForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private userService: DataServiceService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({

      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      symptom: ['', Validators.required],

    });
  }
  onSubmit() {
    this.userService.createUser(this.addForm.value).subscribe();
    alert("Submit Success");
  }

  

}
