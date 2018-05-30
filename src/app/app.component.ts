import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isAuth = false;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },{
      name: 'Frigo',
      status: 'éteint'
    },{
      name: 'Ordi',
      status: 'allumé'
    }
  ]

  constructor(){
    setTimeout(
      () => {
        this.isAuth = true;
      },3000
    );
  }

  open(){
    console.log("bonjour");
  }
}
