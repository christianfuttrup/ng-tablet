import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		this.view = 'Navigation';
	}

	@Output() viewBack = new EventEmitter<string>();

	@Input()
	public view: string = '';

	public backToNavigation(): void {
		this.viewBack.emit('navigation');
	}

	public closeTablet(): void {}
}
