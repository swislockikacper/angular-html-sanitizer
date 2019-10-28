import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  innerHtml = '<div style="text-align: center;">Demo</div>';
  title = 'inner-html-angular';
}
