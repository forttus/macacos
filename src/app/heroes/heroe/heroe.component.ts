import { Component } from "@angular/core";

@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html'
})
export class HeroeComponet{

  // constructor(
  //   public mombre:string,
  //   public edad:number
  // ){}

nombre:string='Iroman';
edad:number=34;

get nombreCapitalizado() : string {
  return this.nombre.toLocaleUpperCase();
}

obtenerNombre():string{
  return `${this.nombre} - ${this.edad}`
}
cambiarNombre():void{
  this.nombre='Spiderman';
}
cambiarEdad():void{
  console.log('fien..');

  this.edad=45
}

}
