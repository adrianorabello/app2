import { Component } from '@angular/core';
import {OfertasService} from './ofertas.service'
/* incluido */
//import { HttpClient } from '@angular/common/http';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OfertasService]
})
export class AppComponent {

  /* incluido */
  //readonly http = "http:localhost://300/ofertas";
  title = 'app2';
}
