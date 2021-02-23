import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalDataSummery } from '../models/global-data';
import { map } from 'rxjs/operators';
import { DateWiseData } from '../models/date-wise-data';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseUrl = "http://localhost:3000/user";
  adminUrl = "http://localhost:3000/posts";
  approveUrl="http://localhost:3000/approved";
  modalUrl="http://localhost:3000/modal";
  private globalDataUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/12-07-2020.csv";
  private dateWiseDataUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";
  constructor(private http: HttpClient) { }

  //For Admin Login Purpose

  validLogin(data) {
    return this.http.get(this.adminUrl);
  }

  //for Create Appoinment
  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }
//For cancel Appoinment
deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  //For Approved Request
  hiddenAppoint(data){
    this.http.post(this.approveUrl, {
      name : data.name,
      age : data.age,
      email : data.email,
      mobile : data.mobile,
      gender : data.gender,
      address:data.address,
      date : data.date
    }).toPromise();
  }

  //For Save Payment data
  
  modalAppoint(data){
    this.http.post(this.modalUrl, {
      name : data.name,
      age : data.age,
      email : data.email,
      mobile : data.mobile,
      gender : data.gender,
      address:data.address,
      date : data.date
    }).toPromise();
  }
//For get Payment
getPayment(){
  return this.http.get(this.modalUrl);
}

  //For display Approved Data
  displayApprovedData(){
    return this.http.get(this.approveUrl);
  }
  
  //for Display Appoinment
  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }


  //For Global data Api
  getGlobalData() {
    return this.http.get(this.globalDataUrl, { responseType: 'text' }).pipe(
      map(result => {
        let data: GlobalDataSummery[] = [];
        let raw = {}
        let rows = result.split('\n');
        rows.splice(0, 1);
        // console.log(rows);
        rows.forEach(row => {
          let cols = row.split(/,(?=\S)/)

          let cs = {
            country: cols[3],
            confirmed: +cols[7],
            deaths: +cols[8],
            recovered: +cols[9],
            active: +cols[10],
          };
          let temp: GlobalDataSummery = raw[cs.country];
          if (temp) {
            temp.active = cs.active + temp.active
            temp.confirmed = cs.confirmed + temp.confirmed
            temp.deaths = cs.deaths + temp.deaths
            temp.recovered = cs.recovered + temp.recovered

            raw[cs.country] = temp;
          } else {
            raw[cs.country] = cs;
          }
        })
        return <GlobalDataSummery[]>Object.values(raw);
      })
    )

  }



  //For Datewise data Api
  getDateWiseData() {
    return this.http.get(this.dateWiseDataUrl, { responseType: 'text' })
      .pipe(map(result => {
        let rows = result.split('\n');
        // console.log(rows);
        let mainData = {};
        let header = rows[0];
        let dates = header.split(/,(?=\S)/)
        dates.splice(0, 4);
        rows.splice(0, 1);
        rows.forEach(row => {
          let cols = row.split(/,(?=\S)/)
          let con = cols[1];
          cols.splice(0, 4);
          // console.log(con , cols);
          mainData[con] = [];
          cols.forEach((value, index) => {
            let dw: DateWiseData = {
              cases: +value,
              country: con,
              date: new Date(Date.parse(dates[index]))

            }
            mainData[con].push(dw)
          })

        })


        // console.log(mainData);
        return mainData;
      }))
  }
}
