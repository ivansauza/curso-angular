import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { VariablesComponent } from './variables/variables.component';
import { ConstructoresComponent } from './constructores/constructores.component';
import { PersonaComponent } from './persona/persona.component';
import { DirectivasComponent } from './directivas/directivas.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    VariablesComponent,
    ConstructoresComponent,
    PersonaComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
