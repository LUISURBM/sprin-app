import { Component, OnInit } from '@angular/core';
import { libro } from '../model/Libro';
import { libroServiceService } from '../services/libro-service.service';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.less']
})
export class LibroListComponent implements OnInit {

  libros:Libro[] = [];

  constructor(private librosService: LibroServiceService) { }

  ngOnInit(): void {
    this.librosService.findAll().subscribe(data => {
      this.libros = data;
    });
  }

}
