import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
@Input() name:string;

  constructor() { }

  ngOnInit() {
  }

}
