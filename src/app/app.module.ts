import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { OtherComponent } from './components/other/other.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RedirectComponent } from './components/redirect/redirect.component';
import { VisitlogComponent } from './visitlog/visitlog.component';
import { VisitorcomponentComponent } from './visitorcomponent/visitorcomponent.component';
import { EmployeeService } from './components/appointments/employeesService';
import { VisitorService } from './visitlog/visitorService';
import { ViewlogComponent } from './visitlog/viewlog/viewlog.component';
import { VisitlogcomponentComponent } from './visitlogcomponent/visitlogcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AppointmentsComponent,
    DeliveryComponent,
    OtherComponent,
    RedirectComponent,
    VisitlogComponent,
    VisitorcomponentComponent,
    ViewlogComponent,
    VisitlogcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, VisitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
