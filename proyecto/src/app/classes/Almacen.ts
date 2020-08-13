import Recibos from '../admin/recibos.json';
import  Estaciones from 'src/app/classes/JSON_INFO/Estaciones.json'
import { Graph } from './Graph';
import { Vertex } from './Vertex';

export class  Almacen
{
    private static markers:{label:string, lat:number, lng:number, rutas: [{label:any,destination:{lat:any, lng:any}, distancia:any}]}[] = Estaciones;
    public  static recibos:{id:string,compras:{costo:string,desde:string,hasta:string,fecha:string}[]}[]= Recibos;
    public  static grafo:Graph= new Graph() ;
    public  static firstTime:boolean= true;
    private static admin:boolean=true;
    private static currentID: string;
    private static me:Almacen;


    private constructor()
        {

        }

    public static crearGrafo()
        {
            if(this.firstTime)
                {
                    this.firstTime=false;
                        console.log("He ingresado correctamente al constuctor de almacen buen dia");


                        Almacen.markers.forEach(estacion => {
                            //CONECTAR CON ESTACIONES AUNQUE ESTAS NO ESTEN
                            let listaRutas:{nameOfVertex:string, weight: number}[]=[];

                            estacion.rutas.forEach(ruta => 
                                {
                                        listaRutas.push({nameOfVertex: ruta.label, weight:  ( Math.abs((ruta.destination.lat-estacion.lat)** 2 -(ruta.destination.lng-estacion.lng ) )**  2)**1/2});
                                    
                                });


                            Almacen.grafo.addVertex(new Vertex(estacion.label,listaRutas,1));  
                            

                            

                        });

                       // console.log(Almacen.grafo.dijkstra("Estación de Cartago","Estacion de Guadalupe"));
     
                }

        }    
    public static getAlmacen()
        {
            if(this.me==null)
                {
                    this.me= new Almacen();
                }
            else
            {
                return this.me;
            }

        }
    public static getmarkers()
        {
            return this.markers;
        }
    public static setAdmin(value:boolean)
        {
            this.admin= value;
        }
    public static getAdmin()
        {
            return this.admin;
        }

    public static setCurrentID(value: string){
        this.currentID = value;
    }

    public static getCurrentID()
        {
            return this.currentID;
        }


    
        public static getCompras(): any
            {
                this.recibos.forEach(element => {
                    if(element.id == this.currentID){
                         return element.compras;
                    }

                  });
              

            }




}