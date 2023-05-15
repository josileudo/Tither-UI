import { Component, Inject, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

import { HeaderComponent } from './components/Header';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  standalone: true,
  template: `<app-header />`
})
export class AppComponent implements OnInit {
  private primengConfig = Inject(PrimeNGConfig);

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
