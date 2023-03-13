import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})

export class InicioComponent {

  public urlImg: any;

  constructor() {
    this.urlImg = [
      '../../../assets/img/Logotipo_Personal(Sebastian_Legnazzi).svg',
      '../../../assets/img/FotoTraje.png',
      '../../../assets/img/wave_inicio.svg',
    ];
  }

  ngOnInit() {
  }
}
