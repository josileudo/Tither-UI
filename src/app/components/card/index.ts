import { Component, Input } from "@angular/core";
import { NgIconComponent } from "@ng-icons/core";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-card',
  imports: [NgClass, NgIconComponent],
  template: `
    <div class="bg-white justify-between p-4 w-full rounded-lg flex items-center">
      <div class="flex flex-col">
        <label class="text-zinc-400 mb-2">{{ label }}</label>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
        <span
          class="font-bold text-4xl"
          [ngClass]="colorValue"
        >
          R$ {{value.toFixed(2)}}
        </span>
      </div>
      <div class="p-3 bg-zinc-200 rounded-full">
        <ng-icon
          class="text-2xl block"
          [style]="'display: block'" name="{{icon}}"
          [ngClass]="colorValue"
        />
      </div>
    </div>
  `,
  standalone: true,
})

export class CardComponent {
  @Input() label = 'Expense';
  @Input() colorValue?: string;
  @Input() icon?: string;
  @Input() value: number = 0

}
