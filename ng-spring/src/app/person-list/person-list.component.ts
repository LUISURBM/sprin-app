import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { PersonServiceService } from '../services/person-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.less']
})
export class PersonListComponent implements OnInit {

  persons:Person[] = [];

  constructor(private personsService: PersonServiceService) { }

  ngOnInit(): void {
    this.personsService.findAll().subscribe(data => {
      this.persons = data;
    });
  }

}
