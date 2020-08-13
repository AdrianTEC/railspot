import { Component, OnInit, ɵReflectionCapabilities } from '@angular/core';
import Recibos from './recibos.json';
import { Observable, of } from "rxjs";

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



  ngOnInit(): void 
    {

    }



}
