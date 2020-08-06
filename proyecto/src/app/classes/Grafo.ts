
import {Lista} from './Lista';
import {NodoGrafo} from './NodoGrafo';

import { Route } from './Route';
class Grafo
    {

        private nodes: Lista<NodoGrafo>;

        public Grafo()
            {

            }

        /**Si agrego una estación agregaré un nodo sin rutas asociadas
         * @param nothing
         * @author Adrian Gonzalez
         * @throws nothing
         * @version 02/08/20
         * */  
        public addStation(value:string)
            {
                    //Agregado de la lista
                    this.nodes.add(new NodoGrafo(value));
                    //Agregado visual
            }

        /**Si remuevo una estación lo eliminaré a él y a sus rutas asociadas por mediode su nombre
         * @param nombre string
         * @author Adrian Gonzalez
         * @throws nothing
         * @version 02/08/20
         * */  
        public removeStation(nombre)
            {
                //Parte Visual
                //Parte JSON?
            }

         
        /** Si agrego una ruta tengo que verificar que no exista una igual
            necesito un punto de partida y uno final
         * @params inicio:string final:string coste:number
         * @author Adrian Gonzalez
         * @throws nothing
         * @version 04/08/20
         * */ 

        public addRoute(inicio:string, final, coste:number)
            {   
                var currentNode= this.nodes.lookFor(inicio);//es un NODO que contiene NODO GRAFO
                if(currentNode!=null)
                    {
                        var currentNodoGrafo:NodoGrafo= <NodoGrafo>currentNode.data;  //:NodoGrafo
                        currentNodoGrafo.getLista().add(new Route(final,coste));
                    }

                //Parte Visual
                //Parte JSON?

            }
        
        public modifyRoute(inicio,final,newCoste)
            {
                //Parte Visual
                //Parte JSON?

            }
      
        // Si remuevo una ruta simplemente la quito de la lista del nodo que la contiene

        public removeRoute(inicio,final)
            {
                //Parte Visual
                //Parte JSON?

            }

        public getListaNodos()
            {
                return this.nodes;
            }


    }