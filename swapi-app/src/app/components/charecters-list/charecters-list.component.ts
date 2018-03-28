import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-charecters-list',
  templateUrl: './charecters-list.component.html',
  styleUrls: ['./charecters-list.component.scss']
})
export class CharectersListComponent implements OnInit {
  public charactersList;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCharectersList().subscribe(data => {console.log(data)});
  }

}
