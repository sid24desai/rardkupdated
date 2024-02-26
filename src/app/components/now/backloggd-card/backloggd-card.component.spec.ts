import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackloggdCardComponent } from './backloggd-card.component';

describe('BackloggdCardComponent', () => {
  let component: BackloggdCardComponent;
  let fixture: ComponentFixture<BackloggdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BackloggdCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(BackloggdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
