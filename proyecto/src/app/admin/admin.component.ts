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

  public compraActual:{desde:string, hasta:any,fecha:any,activo:boolean, costo:number}
  public markers:{label:string, lat:number, lng:number}[] = Almacen.getmarkers();
  public recibos:{id:string, compras:any}[] = Recibos;
  public currentTextito:any = "Nueva Parada Final";
  public currentTexto:any = "Parada Inicial";
  public currentText:any = "Parada Final";
  public currentCompras:any;
  public currrentCompra:any;
  public currentID:any;


  public body:any;
/**
   * Verifica la contrasena ingresada 
   * @param nothing
   * @author Gabriel Vargas
   * @returns nothing
   */

   /**
   * Establece atributos de visualización
   * @param id ,compras 
   * @author Andrés Quiros
   * @returns nothing
   */
  public LlamarRecibo(id:any, compras:any)
    { 
      this.currentID = id;
      this.currentCompras = compras;
    }

  /**
   * Establece atributos de visualización individuales
   * @param desde1,hast,fecha,activo,costo
   * @author Andrés Quiros
   * @returns nothing
   */  
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


     /**
   * retorna el estado de un tiquete
   * @param boolean estado
   * @author Andrés Quiros
   * @returns String
   */
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

  /**
   * Retorna un color para el texto de tiquetes
   * @param boolean estado
   * @author Adrián Gonzáñez
   * @returns String
   */   
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




//_______________DESCARGAR DE BASE DE DATOS______________________//////////////////////////////////////////  

  DATADESCARGABLE() {return of(this.recibos);}
  private setting = {element: {dynamicDownload: null as HTMLElement}}
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
  public cambiarTexto3(cosa:any)
    {
        this.currentTextito= cosa;
    }
  /**
   * CREA UNA RUTA ENTRE DOS ESTACIONES establecidas en la ventana
   * @param nothing
   * @author Yordan Rojas
   * @returns nothing
   */  
  public crearRuta (){
      let lat1:any;
      let lng1:any;
      let lat2:any;
      let lng2:any;
      
      Almacen.getmarkers().forEach(element1 => {
        
        if (element1.label == this.currentTexto){          
              lat1 = element1.lat;
              lng1 = element1.lng;
              Almacen.getmarkers().forEach(element => {
                if (element.label == this.currentText)
                {                
                  lat2 = element.lat;
                  lng2 = element.lng;
                  let nombre: any = element.label;
                  
                  element1.rutas.push({label:nombre, destination:{ lat:lat2, lng: lng2},distancia: ( Math.abs((lat2-lat1) ** 2 -(lng2-lng1 ) ) **  2)**1/2});
                }
          });
        }        
      });  
    }
  /**
   * MODIFICA UNA RUTA ENTRE DOS ESTACIONES establecidas en la ventana por una  tercera
   * @param nothing
   * @author Yordan Rojas
   * @returns nothing
   */  
  public modificarRuta (){
    let lat3:any;
    let lng3:any;

     if (document.getElementById("ejemplo").innerHTML == "existe")
     {

          Almacen.getmarkers().forEach(estacion => 
            {
                if (estacion.label == this.currentTexto) //PARADA INICIAL
                {

                    estacion.rutas.forEach(ruta => {

                    if (ruta.label == this.currentText)//PARADA FINAL
                      {
                          console.log("SE HA ENCONTRADO LA PARADA FINAL");
                          let newLng:any;
                          let newLat:any;
                          Almacen.getmarkers().forEach(nuevaruta => 
                            {
                                if(nuevaruta.label== this.currentTextito) //NUEVA ESTACION
                                  {
                                    

                                    let sepuede:boolean= true;
                                    for(let usuario of Almacen.recibos){   // SE EXPLORAN LOS RECIBOS
                                        for(let factura of usuario.compras) //exploro las facturas de los usuarios
                                          {
                                              console.log("factura--->: "+factura.desde +" "+ factura.hasta);
                                              console.log("actual--->: "+estacion.label + " " +ruta.label);

                                              if(factura.desde== estacion.label)// igual a mi estación original 
                                                {

                                                  if(factura.hasta== ruta.label)//igual a mi destino
                                                    {
                                                      console.log("NO SE PUEDE ");
                                                      sepuede=false;
                                                      break;
                                                    }
                                                }
                                            
                                          }
                                      

                                    }

                                    if( sepuede){
                                    
                                      console.log("SE HA ENCONTRADO LA PARADA NUEVA, MODIFICANDO....");

                                      newLng= nuevaruta.lng;
                                      newLat= nuevaruta.lat;

                                      estacion.rutas.splice(estacion.rutas.indexOf(ruta),1);
                                      estacion.rutas.push({label:this.currentTextito, destination:{lat:newLat,lng: newLng},distancia:( Math.abs((newLat-estacion.lat) ** 2 -(newLng-estacion.lng ) ) **  2)**1/2  })
                                    }
                                    else
                                      {console.log("NO SE PUEDE REALIZAR LA TRANSACCIÓN");
                                        alert("No se puede realizar la transacción, es posible que aún hayan tiquetes asignados")                                    ;
                                      }
                                  }
                            
                          });



                      }

                  });
            }


          });


        }
    }
    /**
   * BORRA UNA RUTA ENTRE DOS ESTACIONES establecidas en la ventana por una  tercera
   * @param nothing
   * @author Yordan Rojas
   * @returns nothing
   */ 
    public borrarRuta(){


      if (document.getElementById("verificacion").innerHTML == "existe"){

          Almacen.getmarkers().forEach(estacion => {
            
            if(estacion.label == this.currentTexto) //Busca la estacion a la que se quiere borrar la ruta
                {
                    estacion.rutas.forEach(ruta => 
                        {
                            if (ruta.label == this.currentText) //Encuentra la ruta que desea eliminar
                                  { 
                                    
                                    let sepuede:boolean= true;
                                    for(let usuario of Almacen.recibos){   // SE EXPLORAN LOS RECIBOS
                                        for(let factura of usuario.compras) //exploro las facturas de los usuarios
                                          {
                                              console.log("factura--->: "+factura.desde +" "+ factura.hasta);
                                              console.log("actual--->: "+estacion.label + " " +ruta.label);

                                              if(factura.desde== estacion.label)// igual a mi estación original 
                                                {

                                                  if(factura.hasta== ruta.label)//igual a mi destino
                                                    {
                                                      console.log("NO SE PUEDE ");
                                                      sepuede=false;
                                                      break;
                                                    }
                                                }
                                            
                                          }
                                      

                                    }



                                    if(sepuede)
                                      { console.log("Borrado de ruta satisfactorio");
                                        estacion.rutas.splice(estacion.rutas.indexOf(ruta),1);


                                    }
                                    else
                                      {console.log("NO SE PUEDE REALIZAR LA TRANSACCIÓN");
                                        alert("No se puede realizar la transacción, es posible que aún hayan tiquetes asignados")                                    ;
                                      }
                                  }
                        
                        });

                }
          });
      }
    }
  /**
   * Verifica que una ruta en ventana pertenezca 
   * @param nothing
   * @author Yordan Rojas
   * @returns nothing
   */  
    public verificarRuta ()
      {
        let resultado:any = "no esta registrado";
        Almacen.getmarkers().forEach(element2 => {

          if (element2.label == this.currentTexto)
            {

              element2.rutas.forEach(element => {

                if (element.label == this.currentText)
                  {
                    resultado = "existe";
                  }
                
              });
            }
        });

      document.getElementById("ejemplo").innerHTML = resultado;


    }
    
    /**
   * Segunda version que verifica que una ruta en ventana pertenezca 
   * @param nothing
   * @author Yordan Rojas
   * @returns nothing
   */ 
    public verificarRuta2 ()
      {
        let resultado:any = "no existe";
        Almacen.getmarkers().forEach(element2 => {

          if (element2.label == this.currentTexto)
            {

              element2.rutas.forEach(element => {

                if (element.label == this.currentText)
                  {
                    resultado = "existe";
                  }
                
              });
            }
        });

      document.getElementById("verificacion").innerHTML = resultado;


    }




  ngOnInit(): void 
    {

    }



}
