export class Station
    {
        //CLASE MODELO, UNICAMENTE POSEE SETTERS Y GETTERS
        //CLASE MODELO, UNICAMENTE POSEE SETTERS Y GETTERS
        //CLASE MODELO, UNICAMENTE POSEE SETTERS Y GETTERS
        //CLASE MODELO, UNICAMENTE POSEE SETTERS Y GETTERS
        //CLASE MODELO, UNICAMENTE POSEE SETTERS Y GETTERS
        //CLASE MODELO, UNICAMENTE POSEE SETTERS Y GETTERS

        private name:string;
        

        
        constructor(value:string)
            {
                if(value!=null)
                {
                    let name= value;
                }
            else
                {
                    let name= "new Station";

                }
            }

        public getName()
            {
                return name;
            }
        public setName(value:string)
            {
                this.name=value;
            }


    }