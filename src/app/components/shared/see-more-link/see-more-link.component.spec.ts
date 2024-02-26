import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMoreLinkComponent } from './see-more-link.component';

describe('SeeMoreLinkComponent', () => {
  let component: SeeMoreLinkComponent;
  let fixture: ComponentFixture<SeeMoreLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SeeMoreLinkComponent]
});
    fixture = TestBed.createComponent(SeeMoreLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
