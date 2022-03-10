import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	constructor() {}

	@Output()
	view = new EventEmitter<string>();

	public applications: Array<IApplication> = [
		{
			name: 'Dark web',
			icon: 'fas fa-globe-europe',
			launch: 'darkweb',
		},
		{ name: 'Racing', icon: 'fas fa-flag-checkered', launch: 'racing' },
	];

	public openApp(app: string): void {
		console.log(app);
		this.view.emit(app);
	}
}
/**
 * @interface IApplication
 */
interface IApplication {
	name: string;
	icon: string;
	launch: string;
}
