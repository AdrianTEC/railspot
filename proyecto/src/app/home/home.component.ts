import { Component, OnInit } from '@angular/core';
import Recibos from './recibos.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public recibos:{id:string, fecha:string}[] = Recibos;
  constructor() { }

  ngOnInit(): void {
  }

}
