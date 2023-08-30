import { MessageModel } from 'src/app/core/models/interface/message.interface';

import {
  createFeature,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';

import { MessageActions } from '../actions/message.actions';

export const initialState: MessageModel = {
  severity: '',
  detail: ''
};

export const messageFeature = createFeature({
  name: 'message',
  reducer: createReducer(
    initialState,
    on(MessageActions.enter, state => {
      return {
        ...state
      };
    }),
    on(MessageActions.sendMessage, (state, { message }) => ({
      ...message
    }))
  )
});

export const MessageSelector = createSelector(
  createFeatureSelector('message'),
  (state: MessageModel) => state
);
