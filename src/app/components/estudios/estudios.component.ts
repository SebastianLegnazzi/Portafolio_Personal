import { Component } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent {

  public objEstudios: Array<any>;

  constructor() {
    this.objEstudios = [
      {
        titulo: "Tecnicatura Universitaria en Desarrollo Web",
        academia: "UNCO",
        duracion: "2,5 Años",
        aprendido: "FullStack LAMP"
      },
      {
        titulo: "Tecnicatura Universitaria en Desarrollo Web",
        academia: "UNCO",
        duracion: "2,5 Años",
        aprendido: "FullStack LAMP"
      },
      {
        titulo: "Tecnicatura Universitaria en Desarrollo Web",
        academia: "UNCO",
        duracion: "2,5 Años",
        aprendido: "FullStack LAMP"
      },
      {
        titulo: "Tecnicatura Universitaria en Desarrollo Web",
        academia: "UNCO",
        duracion: "2,5 Años",
        aprendido: "FullStack LAMP"
      },
    ]
  }

  ngOnInit() {
  }
}

