import {Greeting} from '../domain/Greeting';

export interface HomeState {
    greeting: Greeting;
}

export const HOME_INITIAL_STATE: HomeState = {

    greeting: {message: 'Welcome'}
};