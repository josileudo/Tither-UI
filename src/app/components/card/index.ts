import {Component, Input, OnInit} from "@angular/core";
import { NgIconComponent } from "@ng-icons/core";
import { NgClass } from "@angular/common";

type LabelType = 'Income' | 'Expense' | 'Current Balance';
interface CardModel {
  name: LabelType,
  color: string
}

@Component({
  selector: 'app-card',
  imports: [NgIconComponent, NgClass],
  template: `
    <div class="bg-white p-2 w-full rounded-lg">
      <label class="font-bold">{{ label }}</label>
      <div>
        <span
          class="font-bold text-5xl"
          [ngClass]="className"
        >
          R$ 1500.00
        </span>
      </div>
    </div>
  `,
  standalone: true,
  styles: [``]
})

export class CardComponent implements  OnInit {
  @Input() label: LabelType = 'Expense';

  className = '';
  cardType: CardModel[] = [
    { name: 'Expense', color: 'text-red-800' },
    { name: 'Income', color: 'text-emerald-800'},
    { name: 'Current Balance', color: 'text-zinc-200'}
  ]

  ngOnInit() {
    this.setColorClass();
  }

  setColorClass() {
    this.cardType.map((type: CardModel) => {
      if(type.name === this.label) this.className = type.color
    });
  }
}
