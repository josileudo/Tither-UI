import { signal } from '@angular/core';
import { Constants } from 'src/app/utils/constants';

import {
  createFeature,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';

import { ThemeActions } from '../actions/theme.actions';

const { dark, light } = Constants.theme;

export const initialTheme = 'saga-green';
export const themeFeatureKey = 'theme';
export const globalTheme = signal(initialTheme);

export const themeFeature = createFeature({
  name: themeFeatureKey,
  reducer: createReducer(
    initialTheme,
    on(ThemeActions.lightTheme, () => light),
    on(ThemeActions.darkTheme, () => dark)
  )
});

export const themeSelector = createSelector(
  createFeatureSelector(themeFeatureKey),
  (state: string | undefined) => state
);
