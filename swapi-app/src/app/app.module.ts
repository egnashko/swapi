import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CharectersListComponent } from './components/charecters-list/charecters-list.component';
import { CharecterInfoComponent } from './components/charecter-info/charecter-info.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { HttpService } from '../app/services/http.service';
import { ApiService } from '../app/services/api.service';

const routes: Routes = [
  { path: '', redirectTo: '/charecters-list', pathMatch: 'full' },
  { path: 'charecters-list', component: CharectersListComponent },
  { path: 'information:id', component: CharecterInfoComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CharectersListComponent,
    CharecterInfoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HttpService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
