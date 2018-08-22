import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona/persona';

@Component({
	selector: 'app-directivas',
	templateUrl: './directivas.component.html',
	styleUrls: ['./directivas.component.css']
})

export class DirectivasComponent implements OnInit {
	public personas:Array<Persona>;
	public persona:Persona;
	public visibilidad:boolean;

	constructor() {
		this.visibilidad = true;
		this.persona = new Persona( "Ivan", 25, true );
		this.personas = [
			new Persona( "Monica", 24, true ), 
			new Persona( "Conejo", 0, false )
		];
	}

	ngOnInit() {
	}

	setVisibilidad( value ) {
		this.visibilidad = value;
	}

}
