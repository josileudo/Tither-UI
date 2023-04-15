import { Component } from "@angular/core";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {featherAirplay} from "@ng-icons/feather-icons";
import { heroHandRaised } from '@ng-icons/heroicons/outline'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  template: `
    <header class="relative bg-emerald-800">
      <div class="max-w-8xl mx-auto">
        <div class="flex flex-row items-center py-4 mx-4 ">
          <ng-icon class="text-white text-2xl" name="heroHandRaised" />
          <span class="text-white font-bold">TITHER</span>
        </div>
      </div>
    </header>
  `,
  viewProviders: [provideIcons({ featherAirplay, heroHandRaised })],
  styles: [``]
})

export class HeaderComponent{}
