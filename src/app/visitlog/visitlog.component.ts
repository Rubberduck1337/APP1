import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitlog',
  templateUrl: './visitlog.component.html',
  styleUrls: ['./visitlog.component.css']
})
export class VisitlogComponent implements OnInit {

  constructor(private router: Router) { 
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
    
    // redirect visitor from form to redirect page
    // and then back to the welcome page
    setTimeout(()=>{
      this.router.navigateByUrl('visitlog/welcome');
    }, 3000);
  }

  ngOnInit() {
  }


}
