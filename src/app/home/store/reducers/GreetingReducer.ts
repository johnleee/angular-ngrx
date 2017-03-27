import {Action} from '@ngrx/store';
import {SHOW_RANDOM_GREETING_ACTION} from "../action/ShowRandomGreetingAction";
import {GreetingState} from "../greeting-state";


export function greetingStoreData(state: GreetingState, action: Action): GreetingState {
  switch (action.type) {
    case SHOW_RANDOM_GREETING_ACTION:
      return {
        greeting: action.payload
      };
    default:
      return state;
  }
}
