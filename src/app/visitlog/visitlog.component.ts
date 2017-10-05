import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Visit } from '../visit';
import { VisitorService } from './visitorService';

@Component({
  selector: 'app-visitlog',
  templateUrl: './visitlog.component.html',
  styleUrls: ['./visitlog.component.css']
})
export class VisitlogComponent implements OnInit {
  visits: Visit[] = [];

  constructor(private visitorService: VisitorService) { 
    this.fetch();
  }

  fetch() {
    this.visitorService.fetchEmployeeArr().subscribe( (response) => {
      this.visits = response;
    });
  }

  ngOnInit() {
  }

  getLog(){
    let log: string = '';
    this.visits.forEach((elem) =>{
      log += `${elem.firstName} ${elem.lastName} from ${elem.company} visited on ${elem.date} <br>Email: ${elem.email}<br><br>`;
    })
    document.getElementById("getLogButton").innerHTML = "update log";
    document.getElementById("log").innerHTML= log;
  }

}
