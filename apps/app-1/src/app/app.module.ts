import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { ErrorLoggerEffectModule } from '@imagene/error-handler-effect'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rootAction } from './example.action';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModule)
      }
    ]),
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    ErrorLoggerEffectModule.forRoot([rootAction]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
