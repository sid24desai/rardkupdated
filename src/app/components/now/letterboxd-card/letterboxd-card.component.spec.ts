import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterboxdCardComponent } from './letterboxd-card.component';

describe('LetterboxdCardComponent', () => {
  let component: LetterboxdCardComponent;
  let fixture: ComponentFixture<LetterboxdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LetterboxdCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(LetterboxdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
