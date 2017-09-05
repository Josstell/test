
var imagenes =[];

imagenes["Cauchin"]="vaca.png";
imagenes["pokacho"]="pollo.png";
imagenes["tocinauro"]="cerdo.png";


var coleccion=[];

coleccion.push(new Pakiman("Cauchin","tierra",100,30));
coleccion.push(new Pakiman("pokacho","tierra",80,50));
coleccion.push(new Pakiman("tocinauro","tierra",120,40));

//console.log(coleccion);

for(var pakin of coleccion)
{
  pakin.mostrar();
}
