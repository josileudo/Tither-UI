import { Component } from "@angular/core";

@Component({
  selector: 'app-card',
  template: `
    <div class="bg-white p-2 w-full rounded-lg">
      <label class="text-emerald-800 font-bold">
        Incomes
      </label>
      <div>
        <span class="font-bold text-5xl">
          R$ 1500.00
        </span>
      </div>
    </div>
  `,
  standalone: true,
  styles: [``]
})

export class CardComponent {}
