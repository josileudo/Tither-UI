import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { provideState } from '@ngrx/store';

import { createMemberFeature } from './create-member.reducer';
import { messageFeature } from './message.reducer';
import { themeFeature } from './theme.reducer';

export function provideRegisterFeature(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(createMemberFeature),
    provideState(messageFeature),
    provideState(themeFeature)
  ]);
}
