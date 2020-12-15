import { NgModule } from "@angular/core";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports:[
    MatPaginatorModule,
    MatIconModule
  ],
  exports:[
    MatPaginatorModule,
    MatIconModule
  ]
})
export class MaterialAppModule { }
