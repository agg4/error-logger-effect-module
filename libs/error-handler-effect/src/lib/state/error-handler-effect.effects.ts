import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs';
import { ErrorActionService } from '../services/error-action.service';

@Injectable()
export class ErrorHandlerEffectEffects {
  init$ = createEffect(() =>
    // Refresh if new actions
    this.errorActionService.getActions().pipe(
      switchMap(actions => {
        return this.actions$.pipe(
          ofType(...actions),
          tap(data => {
            console.log('Log error', { data })
          })
        )
      })
    )
    ,
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly errorActionService: ErrorActionService,
    ) {}
}
