import { Component } from '@angular/core';
import {Almacen} from './classes/Almacen';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'proyecto';

  public UserType()
    {
      console.log("USUARIO");
      Almacen.setAdmin(false);
    }
    public AdminType()
    {

      console.log("AMINISTRADOR");
      Almacen.setAdmin(true);
    }
  public Verify()
    {

      var x = (<HTMLInputElement>document.getElementById("password")).value;;

      if(x=="tec")
        {
          Almacen.setAdmin(true);
          console.log("administrador");
          //window.location.href = "http://localhost:4200/Admin"; 
        }
        else  
        {
          window.location.href = "http://localhost:4200/home"; 

        }
    }

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
