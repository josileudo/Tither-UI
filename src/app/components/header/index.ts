import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="relative bg-emerald-800">
      <div class="max-w-8xl mx-auto">
        <div class="py-4 mx-4">
        <!-- TODO: ADD logo -->
          <span>icon</span>
          <span class="text-white font-bold">
            TITHER
          </span>
        </div>
      </div>
    </header>
  `,
  styles: [``]
})

export class HeaderComponent{}
