import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  stringWelcome: string = "Welcome";
  thingy: string;

  constructor() { 
    var time = new Date().getHours();
    if(6 < time && time < 12)
      this.stringWelcome = "Good morning";
    else if (time > 12 && time < 18)
      this.stringWelcome = "Good afternoon";
    else
      this.stringWelcome = "Good evening";
    }

  clickAppointment(): void{
    this.thingy = "appointment";
  }

  clickDelivery(): void{
    this.thingy = "delivery";
  }

  clickOther(): void{
    this.thingy = "other";
  }
  ngOnInit() {
  }

  

}
