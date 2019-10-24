import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { LivescoresComponent } from './livescores/livescores.component';
import { MatchesComponent } from './matches/matches.component';
import { RankingsComponent } from './rankings/rankings.component';
import { PlayersComponent } from './players/players.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'livescores' , component: LivescoresComponent },
  {path: 'series', component: SeriesComponent},
  {path: 'matches' , component: MatchesComponent},
  {path: 'rankings' , component: RankingsComponent},
  {path: 'players' , component: PlayersComponent},
  {path: 'news' , component: NewsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
