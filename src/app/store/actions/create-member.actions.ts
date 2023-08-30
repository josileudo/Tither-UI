import {
  CreateMemberRequiredProps,
  CreateMemberStatus
} from 'src/app/core/models/interface/create-member.interface';
import { HttpErrorResponse } from '@angular/common/http';

import { createActionGroup, emptyProps, props } from '@ngrx/store';

export interface CreateMemberState {
  collection: CreateMemberRequiredProps[];
  currentMemberId: string | null;
  error: HttpErrorResponse | null;
  status: CreateMemberStatus | null;
}

export const CreateMemberActions = createActionGroup({
  source: 'Member',
  events: {
    Enter: emptyProps(),
    'Create Member': props<{ member: CreateMemberRequiredProps }>()
  }
});

export const MemberCreatedApiActions = createActionGroup({
  source: 'Registered Member Api',
  events: {
    Enter: emptyProps(),
    'Member Created': props<{
      member: CreateMemberRequiredProps;
    }>(),
    'Member Created Failure': props<{
      error: HttpErrorResponse;
    }>(),
    'Member Created Loaded Success': props<{
      member: CreateMemberRequiredProps[];
    }>()
  }
});
