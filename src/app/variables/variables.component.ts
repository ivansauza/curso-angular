import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})

export class VariablesComponent {

	public nombre:string = "Ivan";
	private apellido = "Sauza"
	public edad:number = 25;
	public sexo:boolean = true;
	public trabajos:Array<string> = ['Carpintero', 'Albañil'];
	public fechaNacimiento:Array<any> = [8, 'Agosto', 1993];
	public comentarios:any = null;

	ngOnInit() {
		//Variables y alcanzes
		let uno = 3; // Funciona dentro de un bloque
		var dos = 88; // Funciona a nivel global
	}
}
