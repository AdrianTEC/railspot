import { Component, OnInit } from '@angular/core';
import * as dracula from 'graphdracula';
@Component({
  selector: 'app-grafo',
  templateUrl: './grafo.component.html',
  styleUrls: ['./grafo.component.css']
})
export class GrafoComponent implements OnInit {
  graph: dracula.Graph;
  renderer: dracula.Renderer.Raphael;
  layout: dracula.Layout.Spring;
  constructor() { }

  ngOnInit():void {


    const Graph = dracula.Graph;
    const Renderer = dracula.Renderer.Raphael;
    const Layout = dracula.Layout.Spring;
    this.graph= new Graph();
    this.renderer= new Renderer('#paper',this.graph,1100,1100);
    this.layout= new Layout(this.graph);
    //////////////NODOS PRUEBA/////////////////////////////
    
    //this.graph.addNode('happy');


    this.addNode("hola");

    //////////////ENLACES PRUEBA/////////////////////////////
    this.addEdge('happy','sad',100);

    //////////////CONFIGURACION PRUEBA/////////////////////////////
    dracula.Graph

    this.renderer.draw();
    ///////////////////////////////////////////

  }
  addEdge(from,to,weight)
    {
      const edgeData=
        {
          "weight":weight,
          "label":weight,
          "stoke":'#56f',
          "font-size":14,
          "fill":'#56f',
          

          "directed":true
        }
        this.graph.addEdge(from,to,edgeData);
    }
    addNode(name)
    {
      let  nodeData=
        {
          "label":name,
          "radius":300,
        }
        this.graph.initCoords
        this.graph.addNode(nodeData);
    }



}
