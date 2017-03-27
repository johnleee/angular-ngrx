import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOME_INITIAL_STATE } from './store/home-state';
import { ActionReducer, combineReducers, StoreModule } from '@ngrx/store';
import { greetingStoreData } from './store/reducers/GreetingReducer';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routes';
import { HomeUiComponent } from './home-ui/home-ui.component';
import { HomeStoreComponent } from './home-store/home-store.component';

const reducers = {
  greetingStoreData
};

const reducer: ActionReducer<any> = combineReducers(reducers);

export function appReducer(state: any = HOME_INITIAL_STATE, action: any) {
  return reducer(state,action);
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore(appReducer),
    homeRouting
  ],
  declarations: [
    HomeComponent,
    HomeUiComponent,
    HomeStoreComponent
  ]
})
export class HomeModule { }
