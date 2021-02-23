import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HotlineComponent } from './components/hotline/hotline.component';
import { AboutComponent } from './components/about/about.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { CovidtestComponent } from './components/covidtest/covidtest.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './components/invoice/invoice.component';

import { AppoinmentListComponent } from './components/appoinment-list/appoinment-list.component';
import { ApprovedCovidTestListComponent } from './components/approved-covid-test-list/approved-covid-test-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HotlineComponent,
    AboutComponent,
    CountriesComponent,
    DashboardCardComponent,
    CovidtestComponent,
    AdminLoginComponent,
    AdminTableComponent,
    InvoiceComponent,
    
    AppoinmentListComponent,
    
    ApprovedCovidTestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
