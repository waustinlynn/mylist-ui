import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlLoginComponent } from './al-login.component';

describe('AlLoginComponent', () => {
  let component: AlLoginComponent;
  let fixture: ComponentFixture<AlLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
