class planeta {
  constructor(nombre,bit,precio,Sidescuento){
      this.nombre = nombre;
      this.bit = bit;
      this.precio = precio;
      this.Sidescuento = Sidescuento;
          }
        descuento(){ 

        if(this.Sidescuento) { 

          this.precio = this.precio - 1300000;
          }
    }
}

let jupiter = new planeta ("Jupiter",3,5000000,true);

let marte = new planeta ("Marte",4,800000,false);

let ciudadEspacial = new planeta ("Ciudad Espaical kfa.77",3,500000,false)

let urano = new planeta ("Urano",3,8000000,false)

let venus = new planeta ("Venus",3,5000000,true)

let mercurio = new planeta ("Mercurio",3,5000000,false)

let saturno = new planeta ("Saturno",3,5000000,false);

let neptuno = new planeta ("Neptuno",3,5000000,true)

 
  //  array de tarjetas
  
  const tarjetas = [jupiter, marte, urano, ciudadEspacial, venus, mercurio, saturno, neptuno];

const encontrar = tarjetas.find((precio) =>precio.precio=== 5000000);

console.log(encontrar)