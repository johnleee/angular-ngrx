import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {RANDOM_GREETING_ACTION} from "../action/RandomGreetingAction";
import {RandomGreetingService} from "../../service/RandomGreetingService";
import {ShowRandomGreetingAction} from "../action/ShowRandomGreetingAction";


@Injectable()
export class GreetingEffects {

  constructor(private actions$: Actions, private randomGreetingService: RandomGreetingService) {

  }

  @Effect() greetings: Observable<Action> = this.actions$
    .ofType(RANDOM_GREETING_ACTION)
    .switchMap(action => this.randomGreetingService.generateGreeting())
    .map(greeting => new ShowRandomGreetingAction(greeting));
}
