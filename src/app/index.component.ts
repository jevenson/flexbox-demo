import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'index',
  template: `
    <div class="container">
      <a *ngFor="let route of appRoutes" [routerLink]="route.path">{{ route.path }}</a>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    a {
      font-size: 75px;
      text-decoration: none;
      color: darkorange;
    }

    a:hover {
      color: brown;
    }
  `]
})
export class IndexComponent {

  public get appRoutes(): Routes {
    return this.router.config;
  }

  constructor(private router: Router ) { }
}
