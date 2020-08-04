
import {Lista} from './Lista';
import { stringify } from "querystring";
class Grafo<T>
    {

        private nodes: Lista<T>;

        public Grafo<T>()
            {

            }



        // Si agrego una estación agregaré un nodo sin rutas asociadas


        public addStation()
            {

            }

        // Si remuevo una estación lo eliminaré a él y a sus rutas asociadas

        public removeStation()
            {

            }

        // Si agrego una ruta tengo que verificar que no exista una igual
        // necesito un punto de partida y uno final

        public addRoute()
            {

            }
        
        public modifyRoute()
            {

            }
      
        // Si remuevo una ruta simplemente la quito de la lista del nodo que la contiene

        public removeRoute()
            {

            }


    }