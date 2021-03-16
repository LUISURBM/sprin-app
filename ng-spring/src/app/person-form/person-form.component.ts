import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Person } from '../model/person';
import { PersonServiceService } from '../services/person-service.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.less']
})
export class PersonFormComponent implements OnInit {


  person: Person|undefined;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private personsService: PersonServiceService) { }

  ngOnInit(): void {

   this.route.params
    .pipe(
      switchMap((params: Params) => this.personsService.findAll().pipe(
        map( list => list.filter(p => p.firstName == params['name'])[0])
      )))
    .subscribe((person:any) => {
      this.person = person;
      this.person!.contador!++;
      this.personsService.save(this.person!);
    });
  }

}
