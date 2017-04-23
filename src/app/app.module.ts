import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAFSVxEdT1QIZYgKJUpKD_J5vtRE7l4msY",
  authDomain: "superhero-booking-agency.firebaseapp.com",
  databaseURL: "https://superhero-booking-agency.firebaseio.com",
  projectId: "superhero-booking-agency",
  storageBucket: "superhero-booking-agency.appspot.com",
  messagingSenderId: "437210707211"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
