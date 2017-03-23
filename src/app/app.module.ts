import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeUiComponent } from './home-ui/home-ui.component';
import { HomeStoreComponent } from './home-store/home-store.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeUiComponent,
    HomeStoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
