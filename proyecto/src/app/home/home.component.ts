import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Recibos from '../admin/recibos.json';

import { Almacen } from '../classes/Almacen';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  public recibos:{id:string}[] =Recibos;
  public state: string = "/home";
  
  
  ngOnInit(): void {
  }


  public verificar(){

    let idIngresada = (<HTMLInputElement>document.getElementById("busqueda")).value;
    console.log("verificando...")
    
    for(let i of this.recibos)
    {
      if (i.id == idIngresada)
      {
        Almacen.setCurrentID(idIngresada);
        this.state ="/Tren";
        console.log("encontrado")

        break;
      }
      else
      {
        console.log("NOO")
        this.state = "/home";
      }
    
    }

  }

  public returnState(){
    return this.state
    
  }

}