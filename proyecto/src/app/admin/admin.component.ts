import { Component, OnInit, ɵReflectionCapabilities } from '@angular/core';
import Recibos from './recibos.json';
import { Observable, of } from "rxjs";
import {Almacen} from 'src/app/classes/Almacen'


@Component
  (
    {
      selector: 'app-admin',
      templateUrl: './admin.component.html',
      styleUrls: ['./admin.component.css']  
    } 
  )

export class AdminComponent implements OnInit {
  
  public markers:{label:string, lat:number, lng:number}[] = Almacen.getmarkers();
  public recibos:{id:string, compras:any}[] = Recibos;

  public currentID:any;
  public currentCompras:any;
  public currentText:any = "Parada Final";
  public currentTexto:any = "Parada Inicial";

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
  DATADESCARGABLE() {return of(this.recibos);}
  
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }



  descargarFacturasJson() 
    {
      this.DATADESCARGABLE().subscribe((res) => {
        this.dyanmicDownloadByHtmlTag({
          fileName: 'recibos.json',
          text: JSON.stringify(res)
        });
      });
    }

  private dyanmicDownloadByHtmlTag(arg: {fileName: string,text: string}) 
    {
        if (!this.setting.element.dynamicDownload) 
          {
            this.setting.element.dynamicDownload = document.createElement('a');
          }
        const element = this.setting.element.dynamicDownload;
        const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
        element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
        element.setAttribute('download', arg.fileName);
    
        var event = new MouseEvent("click");
        element.dispatchEvent(event);
    }

    public cambiarTexto(cosa:any)
  {
      this.currentText= cosa;
  }
  public cambiarTexto2(cosa:any)
  {
      this.currentTexto= cosa;
  }

    public crearRuta (){
      let lat1:any;
      let lng1:any;
      let lat2:any;
      let lng2:any;
      
      Almacen.getmarkers().forEach(element1 => {
        console.log(element1.label + " No joda");
        if (element1.label == this.currentTexto){
          console.log(element1.label + " Encontre x");
              lat1 = element1.lat;
              lng1 = element1.lng;

              Almacen.getmarkers().forEach(element => {
                if (element.label == this.currentText){
                  console.log(element.label + " Encontre x2");
                  lat2 = element.lat;
                  lng2 = element.lng;
                  
                  element1.rutas.push({destination:{ lat:lat2, lng: lng2},distancia: ( Math.abs((lat2-lat1) ** 2 -(lng2-lng1 ) ) **  2)**1/2});
            }
          });
        }        
      });  
    }



  ngOnInit(): void 
    {

    }



}
