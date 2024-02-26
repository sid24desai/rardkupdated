import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyDefinitionEditorDialogComponent } from './reply-definition-editor-dialog.component';

describe('ReplyDefinitionEditorDialogComponent', () => {
  let component: ReplyDefinitionEditorDialogComponent;
  let fixture: ComponentFixture<ReplyDefinitionEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ReplyDefinitionEditorDialogComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ReplyDefinitionEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
