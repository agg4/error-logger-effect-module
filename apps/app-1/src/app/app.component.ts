import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { rootAction } from './example.action';

@Component({
  selector: 'playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store) {}

  onButtonClick(): void {
    this.store.dispatch(rootAction({ error: '' }))
  }
}
