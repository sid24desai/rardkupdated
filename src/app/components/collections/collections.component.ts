import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../shared/page-title/page-title.component';

@Component({
    selector: 'app-collections',
    templateUrl: './collections.component.html',
    styleUrls: ['./collections.component.scss'],
    standalone: true,
    imports: [PageTitleComponent, RouterLink]
})
export class CollectionsComponent {

}
