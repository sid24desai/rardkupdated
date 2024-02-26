import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOrXComponent } from './check-or-x.component';

describe('CheckOrXComponent', () => {
  let component: CheckOrXComponent;
  let fixture: ComponentFixture<CheckOrXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CheckOrXComponent]
});
    fixture = TestBed.createComponent(CheckOrXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
