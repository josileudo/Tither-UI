import { CreateMemberRequiredProps } from 'src/app/core/models/interface/create-member.interface';
import { CreateMemberStatus } from 'src/app/core/models/enum/create-member-status.enum';

import {
  createFeature,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';

import {
  CreateMemberActions,
  CreateMemberState,
  MemberCreatedApiActions
} from '../actions/create-member.actions';

const createMember = (
  registers: CreateMemberRequiredProps[],
  register: CreateMemberRequiredProps
): CreateMemberRequiredProps[] => [...registers, register];

export const initialState: CreateMemberState = {
  collection: [],
  error: null,
  currentMemberId: null,
  status: null
};

export const createMemberFeatureKey = 'member';

export const createMemberFeature = createFeature({
  name: 'member',
  reducer: createReducer(
    initialState,
    on(CreateMemberActions.enter, state => {
      return {
        ...state,
        currentMemberId: null,
        error: null,
        status: null
      };
    }),
    on(CreateMemberActions.createMember, (state, action) => {
      return {
        ...state,
        collection: createMember(state.collection, action.member)
      };
    }),
    on(MemberCreatedApiActions.memberCreated, (state, action) => {
      return {
        ...state,
        collection: createMember(state.collection, action.member),
        status: CreateMemberStatus.saved
      };
    }),
    on(MemberCreatedApiActions.memberCreatedFailure, (state, action) => {
      return {
        ...state,
        error: action.error,
        status: CreateMemberStatus.error
      };
    })
  )
});

export const createMemberSelector = createSelector(
  createFeatureSelector(createMemberFeatureKey),
  (state: CreateMemberState) => state
);
