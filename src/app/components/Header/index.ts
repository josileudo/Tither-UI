import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgClass } from '@angular/common';
import { Constants } from 'src/app/utils/constants';

import { ButtonModule } from 'primeng/button';
import { select, Store } from '@ngrx/store';

import { ThemeService } from '../../theme.service';

const { dark, light } = Constants.theme;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ButtonModule, NgClass, AsyncPipe],
  template: `
    <header>
      <div
        class="w-60rem m-auto flex justify-content-between align-items-center py-4 px-4"
      >
        <div class="flex flex-row items-center">
          <span class="font-bold">TITHER</span>
        </div>

        <div class="flex justify-content-between align-items-center">
          <p-button
            styleClass="p-button-rounded p-button-text"
            [icon]="check() ? 'pi pi-moon' : 'pi pi-sun'"
            (click)="changeTheme()"
          />
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  private themeService = inject(ThemeService);
  private storeTheme = inject(Store<{ theme: string }>);

  theme?: string;
  themeKey = 'theme';

  check = signal<boolean>(false);
  initialTheme = signal<string>(light);

  ngOnInit(): void {
    this.themeService.startedTheme(this.themeKey);

    this.storeTheme.pipe(select(this.themeKey)).subscribe(value => {
      this.theme = value;
      if (value === dark) this.check.update(() => true);
    });
  }

  changeTheme(): void {
    this.check.update(() => !this.check());

    this.theme = this.check() ? dark : light;

    this.themeService.themeEffect(this.themeKey, this.theme);
  }
}
