import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class TabletService {
	public openedApp: string = '';

	public openApp(app: string): void {
		this.openedApp = app;
	}
}
