
import {Greeting} from '../domain/Greeting';
import {HomeState} from '../store/home-state';
import {createSelector} from "reselect";


export interface GreetingModel {
  data: Greeting;

}

export const getGreetingState = (state: HomeState) => state.greeting;

export const getGreeting = createSelector(getGreetingState, (greeting) => {
  return mapToModel(greeting.greeting);
})

function mapToModel(greeting: Greeting): GreetingModel {
  return {
    data: greeting
  };
}
