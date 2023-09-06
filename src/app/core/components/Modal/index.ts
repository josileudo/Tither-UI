import {
  Component,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
  Input
} from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <p-dialog
      header="Header"
      [(visible)]="visible"
      [modal]="true"
      [style]="{ width: '80vw', height: '80vh' }"
      [draggable]="false"
      [closable]="false"
      [maximizable]="true"
      [resizable]="true"
    >
      <ng-template pTemplate="content">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ng-template>
      <ng-template pTemplate="footer">
        <p-button
          class="w-18rem lg:w-10rem md:w-10rem sm:w-10rem"
          styleClass="p-button-secondary font-bold"
          [label]="'Cancel'"
          (click)="visible = false"
          type="submit"
        />
        <p-button
          class="w-18rem lg:w-10rem md:w-10rem sm:w-10rem"
          styleClass="font-bold"
          [label]="'Save'"
          (click)="visible = false"
          type="submit"
        />
      </ng-template>
    </p-dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  @Input({ required: true }) visible?: boolean;
}
