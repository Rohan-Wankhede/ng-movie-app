import { Component, OnInit } from '@angular/core';
//import { MoviesService } from '../services/movies.service';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
  movies: Object[];
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getTrending()
    .subscribe(res => this.movies=res.results,error=>console.log(error));

    //this.moviesService.getUpcomingMovies()
    //.subscribe(res => this.movies=res.results,error=>console.log(error));
  }

}
