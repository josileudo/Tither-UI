import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header";
import {CardComponent} from "./components/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  template: `
    <div class="h-screen">
      <app-header />
      <main class="max-w-8xl mx-4 mt-2 flex-1">
        <div class="flex flex-row justify-center  gap-2">
          <app-card [label]="'Income'"/>
          <app-card [label]="'Expense'"/>
          <app-card [label]="'Current Balance'"/>
        </div>
      </main>
    </div>
  `,
})
export class AppComponent {}
