import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Visit } from '../../visit';
import { Employee } from '../../employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmployeeService } from './employeesService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})

@Injectable()
export class AppointmentsComponent implements OnInit {
  visits: Visit[] = [];
  employees: Employee[] = [];

  constructor( private router: Router /* private employeeService: EmployeeService */ ) {
   // this.fetch();
  }

  fetch() {
  //  this.employeeService.fetchEmployeeArr().subscribe(response => this.employees = response);
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if(!f.valid)
    {  
      alert("Please fill in the fields correctly.")
      return;
    }
    
    // Fill current visit with next id value, current date,
    // and information from form. Then push to array of visits
    let currVis: Visit = {
      id: this.visits.length,
      date: new Date(),
      firstName: f.value.first,
      lastName: f.value.last,
      email: f.value.email,
      company: f.value.company,
      personToVisit: f.value.toVisit
    }
    this.visits.push(currVis);
    console.log(currVis);


    setTimeout(()=>{
      this.router.navigateByUrl('/welcome');
    }, 3000);
    this.router.navigateByUrl('/redirect');
  }

}
