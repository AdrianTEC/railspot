import { Component } from '@angular/core';
import{Lista} from './classes/Lista';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
}

let res:String="";
let listila = new Lista();
listila.add("ja");
listila.add("je");
listila.add("ji");
listila.add("jo");

res=listila.returnAll();
console.log("RESULTADO FINAL: "+res);
