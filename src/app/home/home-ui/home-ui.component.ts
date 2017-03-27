import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GreetingModel } from '../model/GreetingModel';

@Component({
  selector: 'app-home-ui',
  templateUrl: 'home-ui.component.html',
  styleUrls: ['home-ui.component.css']
})
export class HomeUiComponent implements OnInit {

  @Input()
  greeting: GreetingModel;
  @Output()
  clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
