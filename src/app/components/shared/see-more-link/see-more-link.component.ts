import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-see-more-link',
    templateUrl: './see-more-link.component.html',
    styleUrls: ['./see-more-link.component.scss'],
    standalone: true,
})
export class SeeMoreLinkComponent {
  @Input() url: string;
  @Input() name: string;
}
