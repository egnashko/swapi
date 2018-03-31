import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment';
import { characterModel } from '../../models/characterModel';


import { Store } from '@ngrx/store';

interface AppState {
  charList: characterModel[]
}

@Component({
  selector: 'app-charecter-info',
  templateUrl: './charecter-info.component.html',
  styleUrls: ['./charecter-info.component.scss']
})
export class CharecterInfoComponent implements OnInit {
  private url = environment.url;
  public charInfo;
  public charactersList: characterModel[] = [];
  public charecter: characterModel;

  constructor(private route: ActivatedRoute,
              private httpService: HttpService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('charList').subscribe(data => {
      this.charactersList = data;
    })
    this.route.params.subscribe(res => {
      this.charecter = this.charactersList[res.id];
      console.log(this.charecter);
    });
  }

}
