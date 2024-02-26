import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-check-or-x',
  templateUrl: './check-or-x.component.html',
  styleUrls: ['./check-or-x.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class CheckOrXComponent {
  @Input() isCheck: boolean;
}
