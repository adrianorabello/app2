import { OfertaModel } from './../../models/oferta.model';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.css']
})
export class AcordionComponent implements OnInit {

  @Input() public oferta:OfertaModel
  //public dataTarget:number;
  constructor() { }

  ngOnInit() {
  }

}
