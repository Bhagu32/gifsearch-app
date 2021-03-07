import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GipySearchRoutingModule } from './gipy-search.routing.module';
import { GipySearchComponent } from './gipy-search.component';


@NgModule({
  declarations: [GipySearchComponent],
  imports: [
    CommonModule,
    GipySearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class GipySearchModule { }