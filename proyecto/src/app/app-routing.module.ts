import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {HomeComponent} from './home/home.component';
import {GrafoComponent} from './grafo/grafo.component';
import{AdminComponent} from './admin/admin.component';



const routes: Routes = [

{path:'home',component:HomeComponent},
{path:'grafo',component:GrafoComponent},
{path:'Admin',component:AdminComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
