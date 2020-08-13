import { Component, OnInit } from '@angular/core';

import {AgmDirectionModule} from "agm-direction"
import {Almacen} from 'src/app/classes/Almacen'

import { Graph } from 'src/app/classes/Graph'
import { Vertex } from 'src/app/classes/Vertex'



@Component({
  selector: 'app-grafo',
  templateUrl: './grafo.component.html',
  styleUrls: ['./grafo.component.css']
})


export class GrafoComponent implements OnInit {

  public markers:{label:string, lat:number, lng:number}[] = Almacen.getmarkers();
  public recibos:{id:string,compras:{costo:string,desde:string,hasta:string,fecha:string}[]}[] =Almacen.recibos;//////////////////////////////////////////
  public costoTotal =  0;
  public currentText= "Parada Inicial";
  public currentText2= "Parada Final";
  public distance:number;
  
  lat1 = 9.859392;
  lng1 = -83.910825;
  ngOnInit() {}



 


  public precio(){

    var  x = (<HTMLInputElement>document.getElementById("tiquetes")).value;
    let cantidad = Number (x);

    let latLngIncial:{lat:number,lng:number};
    let latLngFinal:{lat:number,lng:number};
    Almacen.getmarkers().forEach(estacion => 
      {
        
        if(estacion.label==this.currentText)
          {
            latLngIncial={lat:estacion.lat,lng:estacion.lng};
          }
        if(estacion.label==this.currentText2)
          {
            latLngFinal={lat:estacion.lat,lng:estacion.lng};
          }

      });
        let distance:number= this.Distance(latLngIncial.lat,latLngIncial.lng, latLngFinal.lat,latLngFinal.lng);

        distance=Math.round(distance * 100) / 100;
        
    let precio: number = 25*distance;
   

    let costo = cantidad*precio;
    let descuento=0;
    if (cantidad == 1)
      {
      descuento = 0;
      }

    else if (cantidad <= 45)
      {
      descuento = (costo*((cantidad-1)*0.02));
      }

    else 
      {
        descuento =  costo*0.90;
      }

    costo-=descuento;
    costo= Math.round(costo * 10) / 10
    document.getElementById("precioTotal").innerHTML = "₡"+ costo.toString();
    document.getElementById("distancia").innerHTML = distance.toString()+"km";

    this.costoTotal = costo;

  }
  public cambiarTexto(cosa:any)
    {
        this.currentText= cosa;
    }
  public cambiarTexto2(cosa:any)
    {
        this.currentText2= cosa;
    }
    public Distance(lat1,lon1,lat2,lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return d;
    }
    
    public deg2rad(deg) {
      return deg * (Math.PI/180)
    }

  public comprar(){
            this.precio();
            let identidad1 = (<HTMLInputElement>document.getElementById("identidad")).value;
            let fecha = (<HTMLInputElement>document.getElementById("fecha")).value;
            let yaExiste: boolean = false;
            this.recibos.forEach(element => 
                {
                  if (element.id == identidad1)
                    {
                      yaExiste = true;

                      let recibo = 
                        { 
                                  "costo": this.costoTotal.toString(),
                                  "desde": this.currentText,
                                  "hasta": this.currentText2,
                                  "fecha": fecha,
                                  "activo": true               
                        } ;

                    element.compras.push(recibo);
                    console.log(element.compras);
                    Almacen.recibos=this.recibos;
                    return;
                  }            
                });

            if (!yaExiste)
            {

                let recibo = 
                    { 
                    "id": identidad1,
                    "compras":
                        [
                          {
                            "costo": this.costoTotal.toString(),
                            "desde": this.currentText,
                            "hasta": this.currentText2,
                            "fecha": fecha,
                          } 
                    
                        ]
                    };
                    this.recibos.push(recibo);
                    this.mostrar();

            }


    } 



  public renderOptions = 
    {



          strokeOpacity: 0.5,
          icons: [
            {
              icon:     {
                path: 'M 0,0 5,15 -5,15 0,0 z',
            fillColor: 'blue',
            fillOpacity: 1,
                strokeOpacity: 1,
                scale: 0.5
              },
              offset: "0",
              repeat: "30px"
            }
          ],
    }  
  public markerOptions = 
      {
      url: './assets/images/icon.png',
      scaledSize: {
          width: 40,
          height: 40
      }
      }

  
  public mostrar (){
    this.recibos.forEach(element => {
      console.log(element);
      
    });
  }







}



interface marker {
	lat: number;
	lng: number;
	label?: string;
}

let dijkstra = new Graph();
dijkstra.addVertex(new Vertex("A", [{ nameOfVertex: "C", weight: 3 }, { nameOfVertex: "E", weight: 7 }, { nameOfVertex: "B", weight: 4 }], 1));
dijkstra.addVertex(new Vertex("B", [{ nameOfVertex: "A", weight: 4 }, { nameOfVertex: "C", weight: 6 }, { nameOfVertex: "D", weight: 5 }], 1));
dijkstra.addVertex(new Vertex("C", [{ nameOfVertex: "A", weight: 3 }, { nameOfVertex: "B", weight: 6 }, { nameOfVertex: "E", weight: 8 }, { nameOfVertex: "D", weight: 11 }], 1));
dijkstra.addVertex(new Vertex("D", [{ nameOfVertex: "B", weight: 5 }, { nameOfVertex: "C", weight: 11 }, { nameOfVertex: "E", weight: 2 }, { nameOfVertex: "F", weight: 2 }], 1));
dijkstra.addVertex(new Vertex("E", [{ nameOfVertex: "A", weight: 7 }, { nameOfVertex: "C", weight: 8 }, { nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 5 }], 1));
dijkstra.addVertex(new Vertex("F", [{ nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 3 }], 1));
dijkstra.addVertex(new Vertex("G", [{ nameOfVertex: "D", weight: 10 }, { nameOfVertex: "E", weight: 5 }, { nameOfVertex: "F", weight: 3 }], 1));
console.log(dijkstra.vertices);
