import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor','Cpitan Futuro'];
  heroeBorrado:string = ""
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || " ";
  }

}

