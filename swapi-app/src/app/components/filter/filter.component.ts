import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as FilterActions from '../../actions/filter.actions';

interface AppState {
  filter: any
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  private url: string = environment.url;
  public filterForm: FormGroup;

  public films: string[];
  public species: string[];

  constructor(private httpService: HttpService,
              private formBuilder: FormBuilder,
              private store: Store<AppState>) { }

  getFilms() {
    this.httpService.get(`${this.url}films`).subscribe(films => {
      const tempData = <any>films;
      this.films = tempData.results;
      localStorage.films = JSON.stringify(tempData.results);
    })
  }

  getSpecies() {
    return new Observable(observer => {
      let mySpecies = [];
      const getSpacieByPage = (myUrl) => {
        this.httpService.get(`${myUrl}`).subscribe(species => {
          const tempData = <any>species;
          mySpecies = [...mySpecies, ...tempData.results];
          if (tempData.next) {
            getSpacieByPage(tempData.next);
          } else {
            observer.next(mySpecies)
          }
        })
      }
      getSpacieByPage(`${this.url}species`);
    })
  }

  searchCharecter() {
    this.filterForm = this.formBuilder.group({
      movies: [''],
      species: ['']
    })
    this.filterForm.valueChanges.subscribe(() => {
      this.searchProperties();
    });
  }

  searchProperties() {
    this.store.dispatch(new FilterActions.SetFilter(this.filterForm.value));
  }

  ngOnInit() {
    if (localStorage.films) {
      this.films = JSON.parse(localStorage.films);
    } else {
      this.getFilms();
    }

    if (localStorage.species) {
      this.species = JSON.parse(localStorage.species);
    } else {
      this.getSpecies().subscribe(data => {
        this.species = <any>data;
        localStorage.species = JSON.stringify(data);
      });
    }

    this.searchCharecter();
  }

}
