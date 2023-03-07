import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portafolio_Sebastian_Legnazzi';
  
  constructor(){}
  
  ngOnInit(){
    AOS.init()
  }
}
