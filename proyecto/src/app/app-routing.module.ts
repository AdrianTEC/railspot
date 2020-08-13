import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {HomeComponent} from './home/home.component';
import {GrafoComponent} from './grafo/grafo.component';
import{AdminComponent} from './admin/admin.component';
import{VentanatrenComponent} from './ventanatren/ventanatren.component';

const routes: Routes = [
  
{path:'home',component:HomeComponent},
{path:'grafo',component:GrafoComponent},
{path:'Admin',component:AdminComponent},
{path:'Tren',component:VentanatrenComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
