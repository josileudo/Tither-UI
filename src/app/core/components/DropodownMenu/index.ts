import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { DropdownModel } from '../../models/interface/dropdown.interface';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [ButtonModule, CommonModule, RouterLink],
  template: `
    <div [ngClass]="hidden ? 'hidden' : ''">
      <div
        class="
          dropdown scalein animation-duration-800
          gap-2 min-w-19rem max-w-21rem z-1 justify-content-start
          flex flex-wrap right-0 py-3 shadow-3
        "
      >
        <li *ngFor="let route of routes" class="text-center p-3 grid gap-3">
          <ul class="w-5rem flex flex-column align-items-center">
            <p-button
              [styleClass]="
                route.color +
                ' p-ripple p-element p-button-rounded mb-2 p-component p-button-icon-only'
              "
              [icon]="route.icon"
              [routerLink]="['register-decimate']"
            />
            <span class="text-600 text-test">{{ route.label }}</span>
          </ul>
        </li>
      </div>
    </div>
  `
})
export class DropdownMenuComponent {
  @Input({ required: true }) hidden?: boolean;
  @Input() routes?: DropdownModel[];
}
