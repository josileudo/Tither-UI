import { createActionGroup, emptyProps } from '@ngrx/store';

export const ThemeActions = createActionGroup({
  source: 'Theme',
  events: {
    Enter: emptyProps(),
    'light theme': emptyProps(),
    'dark theme': emptyProps()
  }
});
