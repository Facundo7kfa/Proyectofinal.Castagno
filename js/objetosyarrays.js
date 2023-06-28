class planeta {
  constructor(nombre,bit,precio,Sidescuento){
      this.nombre = nombre;
      this.bit = bit;
      this.precio = precio;
      this.Sidescuento = Sidescuento;
      this.vendido = false;
          }
       vendido(){
        this.vendido = true;
       }
}

let jupiter = new planeta ("Jupiter",3,5000000);

let marte = new planeta ("Marte",4,800000);

let ciudadEspacial = new planeta ("Ciudad Espaical kfa.77",3,500000)

let urano = new planeta ("Urano",3,8000000)

let venus = new planeta ("Venus",3,5000000)

let mercurio = new planeta ("Mercurio",3,5000000)

let saturno = new planeta ("Saturno",3,5000000);

let neptuno = new planeta ("Neptuno",3,5000000)

 
  //  array de tarjetas

  const tarjetas = [jupiter, marte, urano, ciudadEspacial, venus, mercurio, saturno, neptuno];


//////////mesi

/*  const precioNavidad = tarjetas.map(item => {
  return {
    nombre: item.nombre ,
    bit: item.bit,
    precio: item.precio - item.precio *0.32,
  }
});

console.log(precioNavidad); */



Object.keys(jupiter).forEach(function (key) {
  let value = jupiter[key];
  console.log(key,value )
});