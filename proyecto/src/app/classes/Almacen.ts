import Recibos from '../admin/recibos.json';

export class  Almacen
{

    private static admin:boolean=true;
    private static me:Almacen;
    private static currentID: string;

    public static recibos:[{id:string, compras:[{ costo:any,desde:string,hasta:string,fecha:string}]}] = Recibos;

    private constructor()
        {

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