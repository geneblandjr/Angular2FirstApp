import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed it!';
    delete = false;
    test = 'Starting value';
    boundValue = 1000;
}