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


}
