import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: [ './nopagefound.component.css' ]
})
export class NopagefoundComponent {
//el año de la pagina year instanciado desde date con el metodo getFullYear
  year = new Date().getFullYear();

}
