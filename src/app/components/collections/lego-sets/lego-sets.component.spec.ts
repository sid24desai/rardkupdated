import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoSetsComponent } from './lego-sets.component';

describe('LegoSetsComponent', () => {
  let component: LegoSetsComponent;
  let fixture: ComponentFixture<LegoSetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [LegoSetsComponent]
});
    fixture = TestBed.createComponent(LegoSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
