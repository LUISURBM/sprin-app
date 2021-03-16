import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorListComponent } from './Autor-list/Autor-list.component';
import { LibroListComponent } from './Libro-list/Libro-list.component';
import { AutorFormComponent } from './Autor-form/Autor-form.component';
import { LibroFormComponent } from './Libro-form/Libro-form.component';
import { LibroServiceService } from './services/Libro-service.service';
import { AutorServiceService } from './services/Autor-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AutorListComponent,
    LibroListComponent,
    AutorFormComponent,
    LibroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AutorServiceService,LibroServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
