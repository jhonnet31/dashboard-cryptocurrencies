import { Component, OnInit, Input,ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
@Input() name:string;
@Input() clave:string;

chart:any=null;

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    let htmlRef = this.elementRef.nativeElement.querySelector("#"+this.clave);

    this.chart = new Chart("hola", {
      type: 'line',
      data: {
       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
       datasets: [
         {
        label: 'Data',
        fill: false,
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#168ede',
        borderColor: '#168ede'
         }
       ]
        },
        options: {
       tooltips: {
        enabled: false
       },
       legend: {
        display: true,
        position: 'bottom',
        labels: {
         fontColor: 'white'
        }
       },
       scales: {
         yAxes: [{
          ticks: {
           fontColor: "white"
          }
         }],
         xAxes: [{
        ticks: {
         fontColor: "white",
         beginAtZero: true
        }
         }]
       }
        }
     });
  }

}
