import  Estaciones from 'src/app/classes/JSON_INFO/Estaciones.json'

export class  Almacen
{

    private static admin:boolean=true;
    private static me:Almacen;
    private static markers:{label:string, lat:number, lng:number, rutas: [{label:any,destination:{lat:any, lng:any}, distancia:any}]}[] = Estaciones;

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






}