import { Component, OnInit } from '@angular/core';
import {AgmDirectionModule} from "agm-direction"
import  Estaciones from 'src/app/classes/JSON_INFO/Estaciones.json'
import { Observable, of } from "rxjs";

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
