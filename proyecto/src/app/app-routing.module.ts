import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {HomeComponent} from './home/home.component';
import {GrafoComponent} from './grafo/grafo.component';




const routes: Routes = [

{path:'',component:HomeComponent},
{path:'grafo',component:GrafoComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
