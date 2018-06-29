import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  fruta_nueva = "";
  frutas = ['Uva','Naranja'];
  frutas_string = String(this.frutas);

  constructor() { }

  agregar() {
    if(this.fruta_nueva!=""){
      this.frutas.push(this.fruta_nueva);
      this.frutas_string = String(this.frutas);
      this.fruta_nueva = "";
    }
    
  }

}
