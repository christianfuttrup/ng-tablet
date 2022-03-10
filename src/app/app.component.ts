import { TabletService } from './services/tablet.service';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(private tabletService: TabletService) {}

	public view = 'navigation';

	public updateView(view: string) {
		this.view = view;
	}
}
