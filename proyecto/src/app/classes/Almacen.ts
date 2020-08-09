export class  Almacen
{

    private static admin:boolean=true;
    private static me:Almacen;

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






}