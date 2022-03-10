import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { createAction, props, Store } from '@ngrx/store';
import { ErrorLoggerEffectModule } from '@imagene/error-handler-effect';

export const lazyAction = createAction('[LAZY] Action', props<{ kotek: number }>())

@Component({
  template: '<button (click)="onButtonClick()">Click 2</button>'
})
export class LazyComponent {

  constructor(private store: Store) {}

  onButtonClick(): void {
    this.store.dispatch(lazyAction({ kotek: 2 }))
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyComponent,
      }
    ]),
    ErrorLoggerEffectModule.forFeature([lazyAction])
   ],
  providers: [],
})
export class LazyModule {}