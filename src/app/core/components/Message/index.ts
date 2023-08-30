import { MessageActions } from 'src/app/store/actions/message.actions';
import { Component, OnInit, inject } from '@angular/core';
import { MessageSelector } from 'src/app/store/reducers/message.reducer';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-message',
  standalone: true,
  template: `
    <p-toast
      [showTransformOptions]="'translateY(100%)'"
      [showTransitionOptions]="'350ms'"
      [hideTransitionOptions]="'450ms'"
      [showTransformOptions]="'translateX(100%)'"
    />
  `,
  imports: [ToastModule],
  providers: [MessageService]
})
export class MessageComponent implements OnInit {
  private messageService = inject(MessageService);
  private store = inject(Store);

  ngOnInit(): void {
    this.store.pipe(select(MessageActions.enter));

    this.store.pipe(select(MessageSelector)).subscribe({
      next: result => {
        if (result) this.messageService.clear();
        this.messageService.add({
          severity: result.severity?.toLowerCase(),
          summary: result.severity,
          detail: result.detail
        });
      }
    });
  }
}
