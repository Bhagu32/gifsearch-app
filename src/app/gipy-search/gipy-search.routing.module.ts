import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GipySearchComponent } from './gipy-search.component';


const routes: Routes = [{
  path: '',
  component: GipySearchComponent,
  data: {
    title: 'Giphy Search'
  }
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GipySearchRoutingModule { }
