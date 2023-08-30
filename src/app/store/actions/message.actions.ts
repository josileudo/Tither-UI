import { MessageModel } from 'src/app/core/models/interface/message.interface';

import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const MessageActions = createActionGroup({
  source: 'Message',
  events: {
    Enter: emptyProps(),
    'Send Message': props<{ message: MessageModel }>()
  }
});
