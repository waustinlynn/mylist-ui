import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appStore from './store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-starter';
  loggedIn: boolean = false;
  userData: any;
  storeData$: Observable<appStore.AppState>;
  menuItems: any[];

  constructor(private store: Store<any>) {
    this.storeData$ = store.select(r => r.app);
  }

  ngOnInit() {
    this.storeData$.subscribe(r => this.loggedIn = r.hasLoggedIn);
    this.menuItems = [
      { name: 'Grocery' }
    ]
  }

  login() {
    this.store.dispatch(new appStore.Login());
    this.store.dispatch(new appStore.GetDocsByType({ docType: 'test' }));
    this.storeData$.subscribe(r => console.log(r));
  }

  onSignIn(event: any) {
    console.log('app onSignIn', event);
    this.userData = JSON.stringify(event);
  }
}
