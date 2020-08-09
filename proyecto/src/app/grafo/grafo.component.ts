import { Component, OnInit } from '@angular/core';
import {AgmDirectionModule} from "agm-direction"
import  Estaciones from 'src/app/classes/JSON_INFO/Estaciones.json'


@Component({
  selector: 'app-grafo',
  templateUrl: './grafo.component.html',
  styleUrls: ['./grafo.component.css']
})


export class GrafoComponent implements OnInit {
  public markers:{label:string, lat:number, lng:number}[] = Estaciones;
  
  lat1 = 9.859392;
  lng1 = -83.910825;

  public dirs: Array<any> = [{
    origin: { lat: 9.858962,
      lng: -83.910431 },
    destination: { lat: 9.858162,
      lng: -83.910231 },
  }, {
    origin: {lat: 9.858162,
      lng: -83.910231},
    destination: { lat: 9.854487,  lng: -83.910514 },
  }];


  ngOnInit() {
   
  }

  public renderOptions = 
    {



      suppressMarkers: true,
      polylineOptions: 
        { 
          
          
          strokeOpacity: 1,
          icons: [
            {
              icon:     {
                path: 'M 0,0 5,15 -5,15 0,0 z',
            fillColor: 'blue',
            fillOpacity: 1,
                strokeOpacity: 1,
                scale: 1
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
