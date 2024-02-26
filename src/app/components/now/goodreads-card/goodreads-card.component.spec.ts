import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodreadsCardComponent } from './goodreads-card.component';

describe('GoodreadsCardComponent', () => {
  let component: GoodreadsCardComponent;
  let fixture: ComponentFixture<GoodreadsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [GoodreadsCardComponent]
});
    fixture = TestBed.createComponent(GoodreadsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
