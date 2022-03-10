import { Injectable } from '@angular/core';
import { ActionCreator } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ErrorActionService {

  private readonly errorActions$ = new BehaviorSubject<ActionCreator[]>([]);

  addActions(actions: ActionCreator[]): void {
    this.errorActions$.next([
      ...this.errorActions$.getValue(),
      ...actions
    ]);
  }

  getActions(): Observable<ActionCreator[]> {
    return this.errorActions$.asObservable()
  }
}
