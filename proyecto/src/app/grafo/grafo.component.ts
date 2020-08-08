import { Component, OnInit } from '@angular/core';
import {AgmDirectionModule} from "agm-direction"


@Component({
  selector: 'app-grafo',
  templateUrl: './grafo.component.html',
  styleUrls: ['./grafo.component.css']
})


export class GrafoComponent implements OnInit {
  
  lat1 = 9.859392;
  lng1 = -83.910825;

  public dirs: Array<any> = [{
    origin: { lat: 9.858962,
      lng: -83.910431 },
    destination: { lat: 9.858162,
      lng: -83.910231 },
    renderOptions: { polylineOptions: { strokeColor: '#f00' } },
  }, {
    origin: {lat: 9.858162,
      lng: -83.910231},
    destination: { lat: 9.854487,  lng: -83.910514 },
    renderOptions: { polylineOptions: { strokeColor: '#0f0' } },
  }];


  ngOnInit() {
   
  }
   
    
  

  public do()
    {
        this.markers.push({
          lat: 9.854387,
          lng:-83.911511 ,
          draggable: true
        });

    }
    markers: marker[] = [
      { 
        lat: 9.854487,
        lng: -83.910514,
        label: 'Estación acuatica del lago',
        draggable: true
      },
      { 
        lat: 9.858962,
        lng: -83.910431,
        label: 'Estacion casa de Yordan',
        draggable: false
      },
      { 
        lat: 9.858162,
        lng: -83.910231,
        label: 'lugar ramdom',
        draggable: false
      }
    ]
}


interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
