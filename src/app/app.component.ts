import { HeaderComponent } from './shared/header/header.component';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor() {}

	public show: boolean = true;
	public view = 'navigation';
	public header: string = '';

	public switchView(view: string, header: string): void {
		this.view = view;
		this.header = header;
	}

	/** Go back to main screen from app */
	public backFromApp(backTo: string): void {
		this.view = backTo;
	}

	/** Hide tablet and reset view to main screen */
	public hideTablet(hide: boolean): void {
		this.show = hide;
		this.view = 'navigation';
	}

	/** Array of applications available with metadata */
	public applications: Array<IApplication> = [
		{
			name: 'Dark web',
			icon: 'fas fa-globe-europe',
			link: 'darkweb',
		},
		{ name: 'Racing', icon: 'fas fa-flag-checkered', link: 'racing' },
		{
			name: 'News',
			icon: 'far fa-newspaper',
			link: 'news',
		},
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
