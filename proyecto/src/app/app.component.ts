import { Component } from '@angular/core';
import {Almacen} from './classes/Almacen';
import { OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit
  {
    title = 'proyecto';
    constructor()
    {
    }
    ngOnInit() {  
            Almacen.crearGrafo();
            
    }
 
    //crea el grafo
    public crearbicho ()
      {
      }

    public UserType()
      {
        console.log("USUARIO");
        Almacen.setAdmin(false);
      } 



  /**
   * Verifica la contrasena ingresada 
   * @param nothing
   * @author Adrian Gonzalez
   * @returns nothing
   */
    public Verify()
      {

        var x = (<HTMLInputElement>document.getElementById("password")).value;;

        if(x=="tec")
          {
            Almacen.setAdmin(true);
          }

      }
  /**
   * Retorna al routerlink la dirección de la ventana
   * @param nothing
   * @author Adrian Gonzalez
   * @returns String 
   */
    public Directioner()
      {

          if(Almacen.getAdmin())
            {
              return"/Admin";
            }
          else
            {
              return"/home";
            }
      }  
  }
