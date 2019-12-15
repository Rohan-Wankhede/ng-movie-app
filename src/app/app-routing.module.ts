import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PopularMoviesComponent} from './popular-movies/popular-movies.component'
import {UpcomingMoviesComponent} from './upcoming-movies/upcoming-movies.component'
const routes: Routes = [
  {path:"popular", component:PopularMoviesComponent},
  {path:"upcoming", component:UpcomingMoviesComponent},
  {path:"trending", component:UpcomingMoviesComponent},
  {path:'', component:PopularMoviesComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
