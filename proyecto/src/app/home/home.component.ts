import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Recibos from 'src/app/classes/JSON_INFO/recibos.json';
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
    
    for(let i of this.recibos)
    {
      if (i.id == idIngresada)
      {
      Almacen.setCurrentID(idIngresada);
      console.log("sirve")
      //window.open("http://localhost:4200/Tren ");
      this.state ="/Tren";
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