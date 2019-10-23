import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cookies';
  buttons = [
    { text: 'Sweet... cookies!', alt: '', colorButton: '#3498db', colorText: '#ffffff', position: 1, type: 'notTricky' },
    { text: 'No. Not for me!', alt: 'Don\'t click me', colorButton: '#ffffff', colorText: '#3498db', position: 2, type: 'tricky' }
  ];

  onMouseover(event: any, type: string) {
    if (type === 'tricky') {
      let rand = Math.floor(Math.random() * 4) + 1;
      while (this.buttons[1].position === rand || rand > 4 || rand < 1) {
        rand = Math.floor(Math.random() * 4) + 1;
      }
      this.buttons[0].position = this.buttons[1].position;
      this.buttons[1].position = rand;
    }
  }

}
