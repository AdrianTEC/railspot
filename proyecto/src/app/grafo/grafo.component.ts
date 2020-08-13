import { Component, OnInit } from '@angular/core';
import {AgmDirectionModule} from "agm-direction"
import  Estaciones from 'src/app/classes/JSON_INFO/Estaciones.json'
import { Observable, of } from "rxjs";

import { Graph } from 'src/app/classes/Graph'
import { Vertex } from 'src/app/classes/Vertex'

@Component({
  selector: 'app-grafo',
  templateUrl: './grafo.component.html',
  styleUrls: ['./grafo.component.css']
})


export class GrafoComponent implements OnInit {

  public markers:{label:string, lat:number, lng:number}[] = Estaciones;
  
  lat1 = 9.859392;
  lng1 = -83.910825;



  ngOnInit() {
   
  }
  

  latlng = [
    [
      9.961869,
      -84.048579
    ],
    [
      9.838734, 
      -83.865541
    ],
    [
      9.981890, 
      -84.087710
    ],
    [
      9.955540,
      -84.082989 
    ],
    [
      9.929034,-84.058325 
    ],
    [
      9.955037, -84.043306 
    ],
    [
      9.945464, -84.033671
    ],
    [
      9.914817,-84.037091
    ],
    [
      9.864255, -83.920214  
    ]
  ];


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
    document.getElementById("prueba").innerHTML = costo.toString();
  }


  public  icons: [{
    icon: {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW},
    offset: '100%',
    repeat: '20px'
}]

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

  public do()
    {
        this.markers.push({
          label:"newStation",
          lat: 9.854387,
          lng:-83.911511 ,
        });

    }
    name = 'Angular';

    fakeValidateUserData() {
      return of({
        userDate1: 1,
        userData2: 2
      });
    }
  
    //
  
    private setting = {
      element: {
        dynamicDownload: null as HTMLElement
      }
    }
  
    dynamicDownloadTxt() {
      this.fakeValidateUserData().subscribe((res) => {
        this.dyanmicDownloadByHtmlTag({
          fileName: 'My Report',
          text: JSON.stringify(res)
        });
      });
  
    }
  
    dynamicDownloadJson() {
      this.fakeValidateUserData().subscribe((res) => {
        this.dyanmicDownloadByHtmlTag({
          fileName: 'My Report.json',
          text: JSON.stringify(res)
        });
      });
    }
  
    private dyanmicDownloadByHtmlTag(arg: {
      fileName: string,
      text: string
    }) {
      if (!this.setting.element.dynamicDownload) {
        this.setting.element.dynamicDownload = document.createElement('a');
      }
      const element = this.setting.element.dynamicDownload;
      const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
      element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
      element.setAttribute('download', arg.fileName);
  
      var event = new MouseEvent("click");
      element.dispatchEvent(event);
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
console.log(dijkstra.dijkstra("A", "F"));
console.log(dijkstra.dijkstra("A", "F"));
console.log(dijkstra.dijkstra("F", "A"));
console.log(dijkstra.dijkstra("E", "A"));
console.log(dijkstra.dijkstra("A", "F"));