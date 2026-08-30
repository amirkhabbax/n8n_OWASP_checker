import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

//   constructor(){
//         // INTENTIONALLY VULNERABLE — for security detector testing only.
//     const userInput = 'test';
//     const element = document.createElement('div');
//     element.outerHTML = userInput;
//   }
}
