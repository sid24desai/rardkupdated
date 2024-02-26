import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyDefinitionsComponent } from './reply-definitions.component';

describe('ReplybotComponent', () => {
  let component: ReplyDefinitionsComponent;
  let fixture: ComponentFixture<ReplyDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ReplyDefinitionsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ReplyDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
