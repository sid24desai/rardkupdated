import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaDiscussionComponent } from './social-media-discussion.component';

describe('SocialMediaDiscussionComponent', () => {
  let component: SocialMediaDiscussionComponent;
  let fixture: ComponentFixture<SocialMediaDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaDiscussionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
