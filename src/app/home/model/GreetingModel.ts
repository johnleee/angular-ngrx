import {Greeting} from '../domain/Greeting';
import {HomeState} from '../store/home-state';

export interface GreetingModel {
    data: Greeting;
}

export function stateToGreetingSelector(state: HomeState): GreetingModel {
    return Object.assign({}, mapToModel(state.greeting));
}

function mapToModel(greeting: Greeting): GreetingModel {
    return {
        data: greeting
    };
}