
import{NodoGrafo} from './NodoGrafo';

export class Route
    {

        private target:NodoGrafo;
        private cost:number;
        constructor( objetivo, costo)
            {
                this.target=objetivo;
                this.cost= costo;
            }
    ///////////////////////////////////////////////////////////////////
        
        public setTarget(value:NodoGrafo)
            {
                this.target= value;
            }
    ///////////////////////////////////////////////////////////////////

        public setCost(value:number)
            {
                this.cost= value;
            }
        public compareTo(value:any)
            {
                return this.target.getDato().getName()== value;
            }

    }