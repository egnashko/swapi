import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpService } from '../../services/http.service';
import { characterModel } from '../../models/characterModel';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/defer';

import { Store } from '@ngrx/store';
import * as CharListActions from '../../actions/charecters-list.actions'; 

interface AppState {
  charList: characterModel[]
}

@Component({
  selector: 'app-charecters-list',
  templateUrl: './charecters-list.component.html',
  styleUrls: ['./charecters-list.component.scss']
})
export class CharectersListComponent implements OnInit {
  public charactersList: characterModel[] = [];
  private url: string = environment.url;
  public dataFetched: boolean = false;

  constructor(private httpService: HttpService,
              private apiService: ApiService,
              private router: Router,
              private store: Store<AppState>) { }

  public getCharectersList() {
    let list = [];
    const getList = (url) => {

      this.httpService.get(url).subscribe(data => {
        const tempData = <any>data;

        tempData.results.map(item => {
          const tempData = <any>item;
          let character: characterModel = new characterModel();
          
          return Observable.defer(async () => {
            // setting char name
            await new Promise((res, rej) => {
              character.name = item.name;
              res();
            })
            // setting char race
            await new Promise((res, rej) => {
              if (tempData.species && tempData.species.length) {
                this.httpService.get(`${item.species[0]}`).subscribe((race => {
                  const tempData = <any>race;
                  character.species = tempData.name;
                }));
                res();
              } else {
                res();
              }
            })
            // setting char films
            await new Promise((res, rej) => {
              if (tempData.films && tempData.films.length) {
                tempData.films.forEach(filmLink => {
                  this.httpService.get(`${filmLink}`).subscribe(film => {
                    const tempData = <any>film;
                    character.movies.push(tempData.title);
                  })
                });
                res();
              } else {
                res();
              }
            });
            // setting char ships
            await new Promise((res, rej) => {
              if (tempData.starships && tempData.starships.length) {
                tempData.starships.forEach(shipLink => {
                  this.httpService.get(`${shipLink}`).subscribe(shipName => {
                    const tempData = <any>shipName;
                    character.spaceships.push(tempData.name);
                  })
                });
                res();
              } else {
                res();
              }
            });
            return character;

          }).subscribe(data => {
            list.push(character);
          });
        },)

        if (tempData.next) {
          getList(tempData.next);
        } else {
          this.setCharListState(list);
        }
      })
    }
    getList(`${this.url}people`);
  }

  charecterInfo(index) {
    this.router.navigate([`/information/${index}`]);
  }

  setCharListState(data) {
    this.store.dispatch(new CharListActions.SetList(data));
  }

  ngOnInit() {
    this.getCharectersList();
    this.store.select('charList').subscribe(data => {
      // if (this.dataFetched) {
      //   console.log(data);
      //   return;
      // } else {
        this.dataFetched = true;
        this.charactersList = data;
      // }
    })
  }

}
