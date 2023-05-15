import { signal } from '@angular/core';
import { Constants } from 'src/app/utils/constants';

import { Action, createReducer, on } from '@ngrx/store';

import { themeActions } from '../actions';

const { dark, light } = Constants.theme;
export const initialTheme = 'saga-green';
export const keyFeature = 'theme';
export const globalTheme = signal(initialTheme);

const _themeReducer = createReducer(
  initialTheme,
  on(themeActions.lightTheme, () => light),
  on(themeActions.darkTheme, () => dark)
);

export function themeReducer(
  state: string | undefined,
  action: Action
): string {
  return _themeReducer(state, action);
}
