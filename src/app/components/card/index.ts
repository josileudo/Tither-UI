import { Component, Input } from "@angular/core";
import { NgIconComponent } from "@ng-icons/core";
import { NgClass } from "@angular/common";

type LabelType = 'Income' | 'Expense' | 'Current Balance';
@Component({
  selector: 'app-card',
  imports: [NgIconComponent, NgClass],
  template: `
    <div class="bg-white p-2 w-full rounded-lg">
      <label class="font-bold">{{label}}</label>
      <div>
        <span
          class="font-bold text-5xl"
          [ngClass]=""
        >
          R$ 1500.00
        </span>
      </div>
    </div>
  `,
  standalone: true,
  styles: [``]
})

export class CardComponent {
  @Input() label: LabelType = 'Expense'

  cardType = {
    expense: 'text-red-800',
    income: 'text-emerald-800',
    current_balance: 'text-zinc-200'
  }
}
