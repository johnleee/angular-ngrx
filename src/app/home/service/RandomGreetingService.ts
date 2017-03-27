import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Greeting} from "../domain/Greeting";

@Injectable()
export class RandomGreetingService {

  greetings = ['Hello', 'Aloha', 'Hi']

  constructor() {
  }


  generateGreeting(): Observable<Greeting> {
    return Observable.of({message: this.greetings[Math.floor(Math.random() * this.greetings.length)]});
  }

}
