import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerializdCardComponent } from './serializd-card.component';

describe('SerializdCardComponent', () => {
  let component: SerializdCardComponent;
  let fixture: ComponentFixture<SerializdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SerializdCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SerializdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
