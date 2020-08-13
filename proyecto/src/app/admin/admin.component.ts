import { Component, OnInit, ɵReflectionCapabilities } from '@angular/core';
import Recibos from './recibos.json';

@Component
  (
    {
      selector: 'app-admin',
      templateUrl: './admin.component.html',
      styleUrls: ['./admin.component.css']  
    } 
  )

export class AdminComponent implements OnInit {

  public recibos:{id:string, compras:any}[] = Recibos;

  public currentID:any;
  public currentCompras:any;

  public compraActual:{desde:string, hasta:any,fecha:any,activo:boolean, costo:number}
  public currrentCompra:any;


  public body:any;
/**
   * Verifica la contrasena ingresada 
   * @param nothing
   * @author Gabriel Vargas
   * @returns nothing
   */

  public LlamarRecibo(id:any, compras:any)
    { 
      this.currentID = id;
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

  ngOnInit(): void 
    {

    }



}
