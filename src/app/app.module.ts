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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AppointmentsComponent,
    DeliveryComponent,
    OtherComponent,
    RedirectComponent,
    VisitlogComponent,
    VisitorcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
