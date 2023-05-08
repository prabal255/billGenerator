import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousDetailsComponent } from './previous-details.component';

describe('PreviousDetailsComponent', () => {
  let component: PreviousDetailsComponent;
  let fixture: ComponentFixture<PreviousDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousDetailsComponent]
    });
    fixture = TestBed.createComponent(PreviousDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
