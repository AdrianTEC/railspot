import { Component, OnInit } from '@angular/core';
import {AgmDirectionModule} from "agm-direction"
import  Estaciones from 'src/app/classes/JSON_INFO/Estaciones.json'
import Rutas from 'src/app/classes/JSON_INFO/Rutas.json'

@Component({
  selector: 'app-grafo',
  templateUrl: './grafo.component.html',
  styleUrls: ['./grafo.component.css']
})


export class GrafoComponent implements OnInit {

  public markers:{label:string, lat:number, lng:number}[] = Estaciones;
  public dirs: {label:string, lat:number, lng:number}[] = Rutas;
  
  lat1 = 9.859392;
  lng1 = -83.910825;



  ngOnInit() {
   
  }

  public renderOptions = 
    {



      suppressMarkers: true,
      polylineOptions: 
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
        },
      
    }
  public markerOptions = 
    {
      origin: 
      {

        opacity: 0,
      },
      destination: 
      {
          opacity: 0,
      },
  }

  public do()
    {
        this.markers.push({
          label:"newStation",
          lat: 9.854387,
          lng:-83.911511 ,
        });

    }

}


interface marker {
	lat: number;
	lng: number;
	label?: string;
}
