import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path:"", component:ListComponent},
  {path:"lists", component:ListComponent},
  {path:"lists/:list_id", component:ListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
