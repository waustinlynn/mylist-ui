import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../reducers/list.reducer';

@Component({
  selector: 'al-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {
  listState$: any;

  constructor(private store: Store<fromStore.ListState>) {
    this.listState$ = store.select(fromStore.selectListFeature);
  }

  ngOnInit() {
    this.listState$.subscribe(r => console.log('list-home sub', r));
  }

}
