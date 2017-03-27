import {Greeting} from '../domain/Greeting';

export interface GreetingState {

  greeting: Greeting;


}

export const GREETING_INITIAL_STATE: GreetingState = {

  greeting: {message : 'Welcome'}
};
