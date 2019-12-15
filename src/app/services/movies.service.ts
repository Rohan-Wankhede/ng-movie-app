import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs' 
@Injectable({
  providedIn: 'root' 
})
export class MoviesService { 
  constructor(private http: HttpClient) { } 
  
  getPopularMovies(page):Observable<any>{ 
     return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=65c9a91c827247bc7d1d119f738397c7&page=${page}`);
  }
  getUpcomingMovies():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=65c9a91c827247bc7d1d119f738397c7');
  }
  getTrending():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/trending/all/day?api_key=65c9a91c827247bc7d1d119f738397c7');
  }
  //https://api.themoviedb.org/3/trending/all/day?api_key=65c9a91c827247bc7d1d119f738397c7

}
