import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminplaceorderComponent } from './adminplaceorder.component';

describe('AdminplaceorderComponent', () => {
  let component: AdminplaceorderComponent;
  let fixture: ComponentFixture<AdminplaceorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminplaceorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminplaceorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
