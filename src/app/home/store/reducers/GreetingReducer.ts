import {HomeState} from '../home-state';
import {Action} from '@ngrx/store';

export function greetingStoreData(state: HomeState, action: Action): HomeState {
    switch (action.type) {
        default:
            return state;
    }
}