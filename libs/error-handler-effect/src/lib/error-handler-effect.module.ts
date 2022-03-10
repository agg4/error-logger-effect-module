import { Inject, InjectionToken, ModuleWithProviders, NgModule, OnDestroy } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ErrorHandlerEffectEffects } from './state/error-handler-effect.effects';
import { ActionCreator } from '@ngrx/store';
import { ErrorActionService } from './services/error-action.service';

export const ERROR_ACTIONS = new InjectionToken<ActionCreator[]>('root.error.actions')

@NgModule({})
export class FeatureErrorLoggerEffectModule implements OnDestroy {

  constructor(
    private errorActionService: ErrorActionService,
    @Inject(ERROR_ACTIONS)
    private errorActions: ActionCreator[]
  ) {
    this.errorActionService.addActions(errorActions);
  }

  ngOnDestroy(): void {
    // TODO: Remove actions?
    //     this.errorActionService.removeActions(this.errorActions);
  }

}

@NgModule({
  imports: [
    EffectsModule.forFeature([ErrorHandlerEffectEffects]),
  ],
  providers: [ErrorActionService]
})
export class RootErrorLoggerEffectModule {

  constructor(
    private errorActionService: ErrorActionService,
    @Inject(ERROR_ACTIONS)
    private errorActions: ActionCreator[]
  ) {
    this.errorActionService.addActions(errorActions);
  }

}

@NgModule({})
export class ErrorLoggerEffectModule {

  static forRoot(errorActions: ActionCreator[]): ModuleWithProviders<RootErrorLoggerEffectModule> {
    return {
      ngModule: RootErrorLoggerEffectModule,
      providers: [
        {
          provide: ERROR_ACTIONS,
          useValue: errorActions
        }
      ]
    };
  }

  static forFeature(errorActions: ActionCreator[]): ModuleWithProviders<FeatureErrorLoggerEffectModule> {
    return {
      ngModule: FeatureErrorLoggerEffectModule,
      providers: [
        {
          provide: ERROR_ACTIONS,
          useValue: errorActions
        }
      ]
    };
  }
}
