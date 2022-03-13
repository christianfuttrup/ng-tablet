import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-darkweb',
	templateUrl: './darkweb.component.html',
	styleUrls: ['./darkweb.component.scss'],
})
export class DarkwebComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	@Input('view')
	public view: string = '';
}
