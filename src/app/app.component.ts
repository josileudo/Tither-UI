import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';

import { HeaderComponent } from './core/components/Header';
import { DashboardPage } from './pages/Dashboard';
import { CardComponent } from './core/components/Card';
import { MessageComponent } from './core/components/Message';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    DashboardPage,
    CardComponent,
    CommonModule,
    RouterOutlet,
    RouterModule,
    MessageComponent
  ],
  standalone: true,
  template: `
    <div class="min-w-15rem">
      <app-message #MessageComponent />
      <app-header />
      <main class="w-80rem m-auto px-4">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('MessageComponent') messageComponent?: MessageComponent;
  private primengConfig = inject(PrimeNGConfig);

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
