import { HeaderComponent } from './shared/header/header.component';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor() {}

	public view = 'navigation';
	public header: string = '';

	public switchView(view: string, header: string): void {
		this.view = view;
		this.header = header;
	}

	public backFromApp(backTo: string): void {
		this.view = backTo;
	}

	public applications: Array<IApplication> = [
		{
			name: 'Dark web',
			icon: 'fas fa-globe-europe',
			link: 'darkweb',
		},
		{ name: 'Racing', icon: 'fas fa-flag-checkered', link: 'racing' },
	];
}
/**
 * @interface IApplication
 */
interface IApplication {
	name: string;
	icon: string;
	link: string;
}
