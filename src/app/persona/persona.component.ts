import { Component, OnInit } from '@angular/core';
// Importando el modelo de persona
import { Persona } from './persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
	public persona:Persona;
	public personas:Array<Persona>;

	constructor() {
		this.persona = new Persona( 'Ivan', 25, true );

		this.personas = [
			new Persona( 'Monica', 24, true ), 
			new Persona( 'Conejo', 0, true )
		];
	}

	ngOnInit() {
		

		console.log( this.persona );
	}

}
