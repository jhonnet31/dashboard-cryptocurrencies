import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items:Array<string>=["BTC","ETH","BAT","LTC"];
  constructor() { }

  ngOnInit() {
  }

}
