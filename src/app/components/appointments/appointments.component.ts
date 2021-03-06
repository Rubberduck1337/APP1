import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Visit } from '../../visit';
import { Employee } from '../../employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmployeeService } from './employeesService';
import { VisitorService } from '../../visitlog/visitorService';
import { Router } from '@angular/router';
import { DataEmpl } from '../../employee';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})

@Injectable()
export class AppointmentsComponent implements OnInit {
  visits: Visit[] = [];
  employees: Employee[] = [];

  constructor(private router: Router, private visitorService: VisitorService, private employeeService: EmployeeService) {
    this.fetch();
    console.log(this.employees);
  }

  ngOnInit() {
  }

  fetch() {
    this.employeeService.fetchEmployeeArr().subscribe( (response) => {
      this.employees = response.Employees;
    });
  }

  // To handle the form:
  onSubmit(f: NgForm) {
    if(!f.valid)
    {  
      console.log(f.value);
      alert("Please fill in the fields correctly.")
      return;
    }
    
    // Fill current visit with next id value, current date,
    // and information from form. Then push to array of visits
    let currVis: Visit = {
      date: new Date(),
      firstName: f.value.first,
      lastName: f.value.last,
      email: f.value.email,
      company: f.value.company,
      personToVisit: f.value.toVisit
    }
    this.visits.push(currVis);
    
    // post data of visit to server
    this.visitorService.postVisit(currVis);
    console.log(currVis);

    // redirect visitor from form to redirect page
    // and then back to the welcome page
    setTimeout(()=>{
      this.router.navigateByUrl('visitor/welcome');
    }, 3000);
    this.router.navigateByUrl('visitor/redirect');
  }

}
