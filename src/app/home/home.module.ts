import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HOME_INITIAL_STATE} from './store/home-state';
import {ActionReducer, combineReducers, StoreModule} from '@ngrx/store';
import {greetingStoreData} from './store/reducers/GreetingReducer';
import {HomeComponent} from "./home.component";
import {homeRouting} from "./home.routes";
import {HomeUiComponent} from "./home-ui/home-ui.component";
import { HomeStoreComponent } from './home-store/home-store.component';
import {GreetingEffects} from "./store/effects/GreetingEffects";
import {EffectsModule} from "@ngrx/effects";
import {RandomGreetingService} from "./service/RandomGreetingService";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { TestComponent } from './test/test.component';

const reducers = {
  greeting: greetingStoreData
};

const reducer: ActionReducer<any> = combineReducers(reducers);

export function appReducer(state: any = HOME_INITIAL_STATE, action: any) {
  return reducer(state, action);
}

@NgModule({
  declarations: [
    HomeComponent,
    HomeUiComponent,
    HomeStoreComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    StoreModule.provideStore(appReducer),
    EffectsModule.run(GreetingEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    homeRouting
  ],
  providers: [
    RandomGreetingService
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
