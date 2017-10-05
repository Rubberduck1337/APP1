import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../components/appointments/employeesService';

@Component({
  selector: 'app-visitlog',
  templateUrl: './visitlog.component.html',
  styleUrls: ['./visitlog.component.css'],
  providers: [EmployeeService]
})
export class VisitlogComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { 
    this.fetch();
  }

  fetch() {
    this.employeeService.fetchEmployeeArr().subscribe( (response) => {
      this.employees = response.Employees;
    });
  }

  ngOnInit() {
  }

  getLog(){
    let log: string = '';
    this.employees.forEach((elem) =>{
      log += `id: ${elem.id}<br>First name: ${elem.firstName} <br>Last name: ${elem.lastName} <br>Email: ${elem.email}<br><br>`;
    })
    document.getElementById("getLogButton").innerHTML = "update log";
    document.getElementById("log").innerHTML= log;
  }

}
