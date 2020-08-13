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


                        Almacen.markers.forEach(estacion => {
                            //CONECTAR CON ESTACIONES AUNQUE ESTAS NO ESTEN
                            let listaRutas:{nameOfVertex:string, weight: number}[]=[];

                            estacion.rutas.forEach(ruta => 
                                {
                                        listaRutas.push({nameOfVertex: ruta.label, weight:  Almacen.Distance(estacion.lat, estacion.lng, ruta.destination.lat, ruta.destination.lng)});

                                });


                            Almacen.grafo.addVertex(new Vertex(estacion.label, listaRutas, 1));  
                            
                        });
                        console.log(Almacen.grafo.vertices)

                        console.log(Almacen.grafo.dijkstra("Estacion de Sabanilla", "Estacion de Guadalupe"))
     
                }

        }   
    
    public static Distance(lat1,lon1,lat2,lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2-lon1); 
        var a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
        }
    
        public static deg2rad(deg) {
        return deg * (Math.PI/180)
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