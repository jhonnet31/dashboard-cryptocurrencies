import { NgModule } from '@angular/core';

import {
  MatSliderModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule

} from '@angular/material';



@NgModule({
  declarations: [],
  exports:[
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule

  ],
  imports: [

    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
