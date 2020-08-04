
 export class Lista<T> 
  {

    head: Nodo;
    size: number;
    ///////////////////////////////////////////////////////////////////

    public Lista()
      {
        this.size = 0;
      }
    /**Agrega un nodo a la lista
     * @param data
     * @author Gabriel Vargas
     * @throws nothing
     * @version 02/08/20
     * */  
    public add(data: T): void 
      {
        if(!this.head) {
          this.head = new Nodo(data);
          this.size++;
          return;
        }

        let current: Nodo = this.head;
        while(current.next) {
          current = current.next;
        }

        current.next = new Nodo(data);
        this.size++;
      }


    /**Busca un valor de la lista por su nombre y si lo encuentra lo retorna
     * @param nombre
     * @author Adrian Gonzalez
     * @throws nothing
     * @returns NODO DE LA LISTA, puede contener un NODOGRAFO o UNA RUTA
     * @version 04/08/20
     * */ 
    public  lookFor(nombre:string):Nodo
      {
        let current: Nodo= this.head;
        while(current!=null)
          {
            if(current.data.compare(nombre))
            {
              return current;
            }
              current= current.next;
          }

          return null;
      }


    /**Borra un Nodo de la lista, por medio de un string para identificarlo
     * @param value
     * @author Gabriel Vargas
     * @throws nothing
     * @version 02/08/20
     * */  
    
    delete(value:string): void 
      {
        let current: Nodo= this.head;
        while(current.next!=null) 
          {
            //encontré al bicho
            if(current.next.data.compare(value))
              {
                current.next = current.next.next;
                this.size--;
                return;
              }

            current = current.next;
          }
      }

    ///////////////////////////////////////////////////////////////////
  
    public returnAll() 
      { 
        var resultado:string="";
        let actual = this.head;

        while(actual!=null)
          {
            resultado=resultado.concat((<string><unknown>actual.data).toString()); 

              actual=actual.next;
          }

        return resultado;

      }


  }

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

class Nodo
  {

    data: any;
    next: Nodo;

    constructor(data) {
      this.data = data;
    }
    // ME LLEGA UN STRING
    public compare(value:any)
      {
        this.data.compareTo(value);
      }


  }