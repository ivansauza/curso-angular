import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constructores',
  templateUrl: './constructores.component.html',
  styleUrls: ['./constructores.component.css']
})
export class ConstructoresComponent {
	public nombre:string;
	public edad:number;

	/* Inicializar variables, Primer metodo que se lanza */
 	constructor() {
 		this.nombre = "Ivan Sauza";
 		this.edad = 25;
 	}

 	/* Llamar metodos, Primero metodo que se lanza despues del constructor */
 	ngOnInit() {
 		this.setEdad( 15 );
 	 	this.saludar();
 	}

	public saludar( ) {
		alert('Hola ' + this.nombre + this.edad );
	}

	public setEdad( edad ) {
		this.edad = edad;
	}

}
