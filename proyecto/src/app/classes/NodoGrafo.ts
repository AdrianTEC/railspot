import { Lista } from "./Lista";
import {Route} from './Route';
import {Station} from './Station';

export class NodoGrafo
    {
        private dato:Station;
        private coords:number[];
        private routes:Lista<Route>;

        constructor(value:string)
            {
                this.dato=null;
                this.coords= [0,0];
                this.routes= new Lista<Route>();
                this.dato= new Station(value);


            }


        public setDato(value:Station)
            {   
                this.dato=value;
            }
        public getDato()
            {
                return this.dato;
            }
        public setCoord(values:number[])
            {
                this.coords=values;
            }
        public getLista()
            {
                return this.routes;
            }
        public compareTo(value:any)
            {
                return this.dato.getName()== value;
            }
        










    }