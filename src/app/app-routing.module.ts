import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { OtherComponent } from './components/other/other.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { VisitlogComponent } from './visitlog/visitlog.component'
import { VisitorcomponentComponent } from './visitorcomponent/visitorcomponent.component';

const routes: Routes = [
  { path: '', redirectTo: 'visitor/welcome', pathMatch: 'full'},
  { path: 'visitlog', component: VisitlogComponent },
  { path: 'visitor', component: VisitorcomponentComponent,
  children: [
    { path: '', redirectTo: 'visitor/welcome', pathMatch: 'full'},
    { path: 'welcome', component: WelcomeComponent },
    { path: 'appointments', component: AppointmentsComponent },
    { path: 'delivery', component: DeliveryComponent },
    { path: 'other', component: OtherComponent },
    { path: 'redirect', component: RedirectComponent }
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
