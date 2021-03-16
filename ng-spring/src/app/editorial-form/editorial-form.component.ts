import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { editorial } from '../model/Editorial';
import { editorialServiceService } from '../services/editorial-service.service';

@Component({
  selector: 'app-editorial-form',
  templateUrl: './editorial-form.component.html',
  styleUrls: ['./editorial-form.component.less']
})
export class editorialFormComponent implements OnInit {

  editorial: Editorial;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private editorialsService: editorialServiceService) { }

  ngOnInit(): void {

  this.route.params
    .switchMap((params: Params) => this.editorialsService.findAll().filter(p => p.firstName = params['name']))
    .subscribe((editorial) => this.editorial = editorial);
  this.editorialsService.save(this.editorial.contador++);
  }

}
