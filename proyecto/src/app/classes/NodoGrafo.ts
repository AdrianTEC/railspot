import { Lista } from "./Lista";
import {Route} from './Route';
export class NodoGrafo
    {
        private dato:Station;
        private coords:number[];
        private routes:Lista<Route>;

        public NodoGrafo()
            {
                this.dato=null;
                this.coords= [0,0];
                this.routes= new Lista<Route>();
            }

        public setDato(value:Station)
            {   
                this.dato=value;
            }
        public setCoord(values:number[])
            {
                this.coords=values;
            }
        public getLista()
            {
                return this.routes;
            }
        










    }