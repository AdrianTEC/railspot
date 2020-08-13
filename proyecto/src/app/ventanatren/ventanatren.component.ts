import { Component, OnInit } from '@angular/core';
import { Almacen } from '../classes/Almacen';
import Recibos from '../admin/recibos.json';

@Component({
  selector: 'app-ventanatren',
  templateUrl: './ventanatren.component.html',
  styleUrls: ['./ventanatren.component.css']
})
export class VentanatrenComponent implements OnInit {

  constructor() {     this.recibos.forEach(element => {
    if(element.id == Almacen.getCurrentID()){
      console.log(element.compras);

         this.currentCompras=element.compras;
    }

  });}

  ngOnInit(): void 
  {

  }

  public prueba(){
    document.getElementById("prueba").innerHTML = Almacen.getCurrentID().toString();

  }

  public recibos:{id:string, compras:any}[] = Recibos;

  public currentID:any;
  public currentCompras:[{ costo:any,desde:string,hasta:string,fecha:string}];
  public compraActual:{desde:string, hasta:any,fecha:any,activo:boolean, costo:number}
  public currrentCompra:any;

  public LlamarRecibo(id:any, compras:any)
    { 

      this.currentID = Almacen.getCurrentID();

      this.currentCompras = compras;
    }
  public LlamarReciboIndi(desde1:string,hasta1:any,fecha1:any,  activo1:boolean,costo1:number)
    {

       this.currrentCompra=
        [
              {
                desde:desde1,
                hasta:hasta1,
                fecha:fecha1,
                activo:activo1,
                costo:costo1
              }
        ] 

    }


    public returnState(state:boolean)
    {
      if(state)
      {
        return "Activo";
      }
      else
        {
          return "Consumido";
        }
    }
  public returnColor(state:boolean)
  {
    if(state)
    {
      return "color:#7bd192";

    }
    else
      {
      return "color:#80200d";

      }
  }

}
