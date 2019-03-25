import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHomeComponent } from './list-home.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ListHomeComponent', () => {
  let component: ListHomeComponent;
  let fixture: ComponentFixture<ListHomeComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ListHomeComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHomeComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
