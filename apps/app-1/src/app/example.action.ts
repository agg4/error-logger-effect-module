import { ActionCreator, ActionCreatorProps, createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export const rootAction = createAction('[ROOT] Example Action', props<{ error: string }>());
