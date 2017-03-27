import {Action} from "@ngrx/store";


export const RANDOM_GREETING_ACTION = "RANDOM_GREETING_ACTION";

export class RandomGreetingAction implements  Action {

  readonly type = RANDOM_GREETING_ACTION;

  constructor() {

  }

}
