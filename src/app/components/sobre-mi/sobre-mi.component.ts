import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent {
  public info: String;
  public imgs: Array<any>;

  constructor() {
    this.info = `
    Bienvenido a mi portafolio!
    Soy desarrollador web abierto a nuevas experiencias y aprendizajes que enriquezcan mi camino en la programación, adaptándome cada vez más a la gran variedad de tecnologías y nuevos grupos de trabajo.
     
    `
    this.imgs = [
      {
        imagen: '../../../assets/img/php.png',
        url: 'https://www.php.net/manual/es/intro-whatis.php'
      },
      {
        imagen: '../../../assets/img/angular.png',
        url: 'https://angular.io/'
      },
      {
        imagen: '../../../assets/img/mySQL.png',
        url: 'https://www.mysql.com/'
      },
      {
        imagen: '../../../assets/img/html.png',
        url: 'https://developer.mozilla.org/es/docs/Web/HTML'
      },
      {
        imagen: '../../../assets/img/css.png',
        url: 'https://developer.mozilla.org/es/docs/Web/CSS'
      },
      {
        imagen: '../../../assets/img/js.png',
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
      },
      {
        imagen: '../../../assets/img/nodeJs.png',
        url: 'https://nodejs.org/es/'
      },
      {
        imagen: '../../../assets/img/mongoDb.svg',
        url: 'https://www.mongodb.com/es'
      },
      {
        imagen: '../../../assets/img/bootstrap.svg',
        url: 'https://getbootstrap.com/'
      },
      {
        imagen: '../../../assets/img/jQuery.png',
        url: 'https://jquery.com/'
      },
      {
        imagen: '../../../assets/img/gitHub.svg',
        url: 'https://github.com/SebastianLegnazzi'
      },
    ];
  }

  ngOnInit() {
    consoleText(['Me encanta programar 😊', 'Soy fan de PHP 🤪', 'Me encanta el diseño 🤩', 'Me gusta idear paginas modernas 🤔'], 'text-loco', ['tomato', 'green', 'lightblue']);
  }

  irPagina(url: string) {
    window.open(url, '_blank')
  }
}
/* ======================= - Funcion efecto de texto y borrado - ============================ */

function consoleText(words: any, id: any, colors: any) {
  if (
    0 === undefined) colors = ['#fff'];
  let visible: any = true;
  let letterCount: any = 1;
  let x: any = 1;
  let waiting: any = false;
  let target: any;
  target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)                      //Setea el tiempo que espera para borrar el texto
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      visible = false;

    } else {

      visible = true;
    }
  }, 400)
}
