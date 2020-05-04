import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlogindashboardComponent } from './userlogindashboard.component';

describe('UserlogindashboardComponent', () => {
  let component: UserlogindashboardComponent;
  let fixture: ComponentFixture<UserlogindashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlogindashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlogindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
