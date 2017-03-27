import {GREETING_INITIAL_STATE, GreetingState} from "./greeting-state";

export interface HomeState {

  greeting: GreetingState;


}

export const HOME_INITIAL_STATE: HomeState = {

  greeting: GREETING_INITIAL_STATE
};
