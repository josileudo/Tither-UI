import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Constants } from 'src/app/utils/constants';
import { ThemeService } from 'src/app/core/services/theme.service';
import { RouterLink, RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { select, Store } from '@ngrx/store';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef
} from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';

import { DropdownMenuComponent } from '../DropodownMenu';
import { DropdownModel } from '../../models/interface/dropdown.interface';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { ModalComponent } from '../Modal';

const { dark, light } = Constants.theme;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    DropdownMenuComponent,
    RouterModule,
    RouterLink,
    ClickOutsideDirective,
    DynamicDialogModule,
    DialogModule,
    ModalComponent
  ],
  template: `
    <app-modal [visible]="modalVisible()" />
    <header class="w-80rem m-auto relative">
      <div class="flex justify-content-between align-items-center py-4 px-4">
        <a
          class="flex flex-row align-items-center text-xl gap-1
            transition-colors transition-duration-200 hover:text-700"
          [routerLink]="''"
        >
          <i class="pi pi-wallet text-primary"></i>
          <span class="font-bold">TITHER</span>
        </a>

        <div class="flex justify-content-between align-items-center gap-1">
          <p-button
            styleClass="p-button-rounded p-button-text"
            icon="pi pi-plus-circle"
            (click)="showDialog()"
          />

          <div>
            <app-dropdown-menu [routes]="routes" icon="pi-table" />
          </div>

          <p-button
            styleClass="p-button-rounded p-button-text"
            [icon]="check() ? 'pi pi-sun' : 'pi pi-moon'"
            (onClick)="changeTheme()"
          />
        </div>
      </div>
    </header>
  `,
  providers: [DialogService]
})
export class HeaderComponent implements OnInit {
  private themeService = inject(ThemeService);
  private storeTheme = inject(Store<{ theme: string }>);
  private dialogService = inject(DialogService);

  ref: DynamicDialogRef | undefined;
  theme?: string;
  themeKey = 'theme';

  check = signal<boolean>(false);
  openMenu = signal<boolean>(true);
  modalVisible = signal<boolean>(true);

  initialTheme = signal<string>(light);
  items!: MenuItem[];
  routes: DropdownModel[] = [
    {
      label: 'Register',
      icon: 'pi pi-id-card',
      color: 'p-button'
    },
    {
      label: 'Router 2',
      icon: 'pi pi-id-card',
      color: 'p-button-info'
    },
    {
      label: 'Router 3',
      icon: 'pi pi-id-card',
      color: 'p-button-success'
    },
    {
      label: 'Router 4',
      icon: 'pi pi-id-card',
      color: 'p-button-secondary'
    }
  ];

  ngOnInit(): void {
    this.themeService.startedTheme(this.themeKey);

    this.storeTheme.pipe(select(this.themeKey)).subscribe(value => {
      this.theme = value;
      if (value === dark) this.check.update(() => true);
    });
  }

  show(): void {
    this.ref = this.dialogService.open(ModalComponent, {
      header: 'Register an expense',
      width: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      footer: 'Footer test'
    });
  }

  changeTheme(): void {
    this.check.update(() => !this.check());

    this.theme = this.check() ? dark : light;

    this.themeService.themeEffect(this.themeKey, this.theme);
  }

  showDialog(): void {
    this.modalVisible.update(() => true);
  }

  handleOpenMenu(): void {
    this.openMenu.update(() => !this.openMenu());
    console.log(this.openMenu());
  }
}
