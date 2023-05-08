import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisMonthSummaryComponent } from './this-month-summary.component';

describe('ThisMonthSummaryComponent', () => {
  let component: ThisMonthSummaryComponent;
  let fixture: ComponentFixture<ThisMonthSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThisMonthSummaryComponent]
    });
    fixture = TestBed.createComponent(ThisMonthSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
