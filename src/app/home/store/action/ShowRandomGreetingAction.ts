import {Action} from "@ngrx/store";
import {Greeting} from "../../domain/Greeting";

export const  SHOW_RANDOM_GREETING_ACTION:string = 'SHOW_RANDOM_GREETING_ACTION';

export class ShowRandomGreetingAction implements Action {

  readonly type = SHOW_RANDOM_GREETING_ACTION;

  constructor(public payload?:Greeting) {
  }

}
