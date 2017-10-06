import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { Visit } from '../../visit';
import { VisitorService } from '../visitorService';


@Component({
  selector: 'app-viewlog',
  templateUrl: './viewlog.component.html',
  styleUrls: ['./viewlog.component.css']
})
export class ViewlogComponent implements OnInit {
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
