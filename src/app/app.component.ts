import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header";
import {CardComponent} from "./components/card";
import {NgFor} from "@angular/common";

import {provideIcons} from "@ng-icons/core";
import {heroArrowSmallUp, heroArrowSmallDown, heroBanknotes} from "@ng-icons/heroicons/outline";

type LabelType = 'Income' | 'Expense' | 'Current Balance';
interface CardModel {
  name: LabelType,
  color: string,
  icon: string,
  value: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CardComponent, NgFor],
  template: `
    <div class="h-screen">
      <app-header />
      <main class="max-w-8xl mt-2 m-auto px-4">
        <div class="flex flex-row justify-center gap-2 ">
          <app-card
            *ngFor="let card of cardType"
            class="w-full"
            [label]="card.name"
            [colorValue]="card.color"
            [icon]="card.icon"
            [value]="card.value"
          />
        </div>
      </main>
    </div>
  `,
  viewProviders: [provideIcons( { heroArrowSmallUp, heroArrowSmallDown, heroBanknotes } )],
})
export class AppComponent {
  cardType: CardModel[] = [
    {
      name: 'Income',
      color: 'text-emerald-800',
      icon: 'heroArrowSmallUp',
      value: 2000.00
    },
    {
      name: 'Expense',
      color: 'text-red-800',
      icon: 'heroArrowSmallDown',
      value: 1200.00
    },
    {
      name: 'Current Balance',
      color: 'text-zinc-800',
      icon: 'heroBanknotes',
      value: 800.00
    }
  ]
}
