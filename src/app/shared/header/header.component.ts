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
	@Output() closeButton = new EventEmitter<boolean>();

	@Input()
	public view: string = '';

	public backToNavigation(): void {
		this.viewBack.emit('navigation');
		this.view = 'Navigation';
	}

	public closeTablet(): void {
		this.closeButton.emit(false);
	}
}
