import { Component, OnInit } from '@angular/core';
import Recibos from 'src/app/classes/JSON_INFO/recibos.json';
import {AgmDirectionModule} from "agm-direction"
import  Estaciones from 'src/app/classes/JSON_INFO/Estaciones.json'

@Component({
  selector: 'app-grafo',
  templateUrl: './grafo.component.html',
  styleUrls: ['./grafo.component.css']
})


export class GrafoComponent implements OnInit {

  public markers:{label:string, lat:number, lng:number}[] = Estaciones;

  public recibos:{id:string,compras:{costo:string,desde:string,hasta:string,fecha:string}[]}[] =Recibos;//////////////////////////////////////////
  
  lat1 = 9.859392;
  lng1 = -83.910825;
  ngOnInit() {}

  public costoTotal =  0;

  

 


  public precio(){

    var  x = (<HTMLInputElement>document.getElementById("tiquetes")).value;
    let cantidad = Number (x);
    let precio: number = 100;
    let costo = cantidad*precio;
    let descuento=0;
    if (cantidad == 1)
    {
     descuento = 0;
    }

    else if (cantidad <= 45)
    {
     descuento = (costo*(cantidad*0.02));
    }

    else 
    {
       descuento =  costo*0.90;

    }

    costo-=descuento;
    document.getElementById("precioTotal").innerHTML = costo.toString();
    this.costoTotal = costo;

  }

  public currentText= "Parada Inicial";
  public cambiarTexto(cosa:any)
  {
      this.currentText= cosa;
  }

  public currentText2= "Parada Inicial";
  public cambiarTexto2(cosa:any)
  {
      this.currentText2= cosa;
  }



  public comprar(){
            this.precio();
            let ruta1 = (<HTMLInputElement>document.getElementById("5")).textContent;
            let cantidad = (<HTMLInputElement>document.getElementById("tiquetes")).value;

            let identidad1 = (<HTMLInputElement>document.getElementById("identidad")).value;

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
                                  "fecha":"12/12/12"                
                        } ;

                    let compras:{ costo: string; desde: string; hasta: string; fecha: string; }[] = element.compras;
                    compras.push(recibo);
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
                            "fecha":"12/12/12"
                          } 
                    
                        ]
                    };
                    this.recibos.push(recibo);

            }

            for(let i of this.recibos)
              {
                console.log(i);
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

 
    name = 'Angular';



}



interface marker {
	lat: number;
	lng: number;
	label?: string;
}
