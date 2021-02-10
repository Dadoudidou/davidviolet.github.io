import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <div class="content-wrap">
        <app-header></app-header>
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
