import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastfmCardComponent } from './lastfm-card.component';

describe('LastfmCardComponent', () => {
  let component: LastfmCardComponent;
  let fixture: ComponentFixture<LastfmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LastfmCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(LastfmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
