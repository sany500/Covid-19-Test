import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { AppoinmentListComponent } from './components/appoinment-list/appoinment-list.component';
import { ApprovedCovidTestListComponent } from './components/approved-covid-test-list/approved-covid-test-list.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CovidtestComponent } from './components/covidtest/covidtest.component';
import { HomeComponent } from './components/home/home.component';
import { HotlineComponent } from './components/hotline/hotline.component';
import { InvoiceComponent } from './components/invoice/invoice.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "countries",
    component: CountriesComponent
  },
  {
    path: "About",
    component: AboutComponent
  },
  {
    path: "hotline",
    component: HotlineComponent
  },
  {
    path: "covidTest",
    component: CovidtestComponent
  },
  {
    path: "adminLogin",
    component: AdminLoginComponent
  },
  {
    path: "dashbord",
    component: AdminTableComponent,
    children: [{ path: 'appoinment-list', component: AppoinmentListComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'approved-list', component: ApprovedCovidTestListComponent},
    { path: 'adminLogin2', component: AdminLoginComponent}]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
