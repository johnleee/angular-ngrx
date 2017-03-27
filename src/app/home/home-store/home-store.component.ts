import {Component, OnInit} from '@angular/core';
import {getGreeting, GreetingModel} from "../model/GreetingModel";
import {Observable} from "rxjs";
import {HomeState} from "../store/home-state";
import {Store} from "@ngrx/store";
import {RandomGreetingAction} from "../store/action/RandomGreetingAction";

@Component({
  selector: 'app-home-store',
  templateUrl: './home-store.component.html',
  styleUrls: ['./home-store.component.css']
})
export class HomeStoreComponent implements OnInit {

  greeting$: Observable<GreetingModel>;

  constructor(private store: Store<HomeState>) {

    this.greeting$ = store.select(getGreeting);
  }


  randomGreeting() {
    this.store.dispatch(new RandomGreetingAction());
  }

  ngOnInit() {
  }

}
