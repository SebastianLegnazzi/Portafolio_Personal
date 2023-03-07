import { Component, OnInit, NgModule } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})

export class InicioComponent {

  public urlImg: any;

  constructor() {
    this.urlImg = [
      '../../../assets/img/2_Logotipo_Personal(Sebastian_Legnazzi).svg',
      '../../../assets/img/FotoTraje.png'
    ];
  }

  ngOnInit() {
  }
}
