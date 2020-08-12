import { Component, OnInit, ɵReflectionCapabilities } from '@angular/core';
import Recibos from './recibos.json';

@Component
  (
    {
      selector: 'app-admin',
      templateUrl: './admin.component.html',
      styleUrls: ['./admin.component.css']  
    } 
  )

export class AdminComponent implements OnInit {

  public recibos:{id:string, compras:any}[] = Recibos;

  public currentID:any;
  public currentCompras:any;

/**
   * Verifica la contrasena ingresada 
   * @param nothing
   * @author Gabriel Vargas
   * @returns nothing
   */
  public LlamarRecibo(id:any, compras:any)
  {
    this.currentID = id;
    this.currentCompras = compras;

  }

  ngOnInit(): void 
    {

    }

}
