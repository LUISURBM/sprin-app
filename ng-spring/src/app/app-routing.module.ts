import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { EditorialListComponent } from './editorial-list/editorial-list.component';
import { EditorialFormComponent } from './editorial-form/editorial-form.component';

const routes: Routes = [
  { path: 'autores', component: PersonListComponent },
  { path: 'viewperson/:name', component: PersonFormComponent },
  { path: 'editorials', component: EditorialListComponent },
  { path: 'vieweditorial/:name', component: EditorialFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
