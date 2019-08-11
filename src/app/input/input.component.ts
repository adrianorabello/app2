import { Component, OnInit,Input,ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit,AfterContentInit {

  @Input() label:string;
  @Input()  errorMessage:string;

  public input:string;

  //@ContentChild(NgModel) model<m:NgModel;


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){

  }

}
