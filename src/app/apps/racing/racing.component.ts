import { Component, OnInit } from '@angular/core';
import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';

@Component({
	selector: 'app-racing',
	templateUrl: './racing.component.html',
	styleUrls: ['./racing.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition(
				'expanded <=> collapsed',
				animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
			),
		]),
	],
})
export class RacingComponent {
	constructor() {}

	/** Race tracks with meta data */
	public tracks: Array<ITrackInformation> = [
		{
			name: 'PD Temptation',
			distance: 0,
			recordName: '',
			record: '',
		},
		{
			name: 'Shipment',
			distance: 0,
			recordName: '',
			record: '',
		},
		{
			name: 'Grapeseed Circuit',
			distance: 0,
			recordName: '',
			record: '',
		},
		{
			name: 'Humane Labs',
			distance: 0,
			recordName: '',
			record: '',
		},
		{
			name: 'Forgot Something?',
			distance: 0,
			recordName: '',
			record: '',
		},
		{
			name: 'Hillbilly High Life',
			distance: 0,
			recordName: '',
			record: '',
		},
		{
			name: 'Paleto Prix',
			distance: 0,
			recordName: '',
			record: '',
		},
	];

	/** Column headers for available races */
	public columnHeaders: Array<string> = [
		'No.',
		'Name',
		'Participants',
		'Track',
		'Best time',
		'Join',
	];

	/** Current available races */
	public racesAvailable = [
		{
			id: 1,
			no: '#1',
			name: 'Race name',
			participants: 2,
			track: 'Trash',
			bestTime: '127',
			status: 'Join race',
		},
	];

	/** Joins a specific race */
	public joinRace(raceId: number): void {
		console.log(raceId);
	}
}

interface ITrackInformation {
	name: string;
	distance: number;
	recordName: string;
	record: string;
}
