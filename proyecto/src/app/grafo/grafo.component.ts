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
    this.renderer= new Renderer('#paper',this.graph,300,300);
    this.layout= new Layout(this.graph);
   
    this.graph.addNode('happy');
    this.graph.addNode('sad');
    this.addEdge('happy','sad',100);
    this.renderer.draw();
  }
  addEdge(from,to,weight)
    {
      const edgeData=
        {
          "weight":weight,
          "label":weight,
          "stoke":"#56f",
          "front-size":"14px"
        }
        this.graph.addEdge(from,to,edgeData);
    }
}
