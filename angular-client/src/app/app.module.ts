import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { LivescoresComponent } from './livescores/livescores.component';
import { MatchesComponent } from './matches/matches.component';
import { RankingsComponent } from './rankings/rankings.component';
import { PlayersComponent } from './players/players.component';
import { NewsComponent } from './news/news.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    LivescoresComponent,
    MatchesComponent,
    RankingsComponent,
    PlayersComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
