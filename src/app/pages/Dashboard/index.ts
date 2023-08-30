import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

import { CardComponent } from '../../core/components/Card/index';

@Component({
  selector: 'page-dashboard',
  standalone: true,
  imports: [CardComponent, CommonModule],
  template: `
    <div class="relative">
      <span class="font-bold">Dashboard</span>
      <div class="m-0 grid max-w-full mt-3 gap-3">
        <app-card
          *ngFor="let card of cardConfig"
          class="card shadow-1 col"
          [label]="card.title"
          [value]="card.value"
          [type]="card.type"
          [transactions]="card.transactions"
        />
      </div>
    </div>
  `
})
export class DashboardPage {
  cardConfig = [
    {
      title: 'Incoming',
      value: 150,
      type: 'incoming',
      transactions: [65, 49, 78, 65, 93, 55, 90]
    },
    {
      title: 'Expenses',
      value: 50,
      type: 'expense',
      transactions: [65, 10, 67, 23, 60, 53, 82]
    },
    {
      title: 'Amount',
      value: 100,
      type: 'amount',
      transactions: [65, 59, 80, 81, 93, 55, 90]
    }
  ];
}
