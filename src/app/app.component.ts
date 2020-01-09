import { Component } from '@angular/core';
import { RomanNumberConverter } from "./romannumber";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public res = RomanNumberConverter.romanize();
}
