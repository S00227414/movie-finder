import { Component } from '@angular/core';
import { OmdbApiService } from 'src/app/services/omdb-api.service';
import { IOMDBResponse2 } from 'src/app/omdbresponse2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  movieData:IOMDBResponse2|any
  currentPage = 1;
  maxPages = 0;
  errorMessage:any;
  private _omdbService: any;

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMoviesData(movieName,this.currentPage).subscribe(
      (      movieData: any) => {
        this.movieData=movieData;
        //console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }

  getPreviousPage(movieName:string): boolean {
    this.currentPage--;
    if (this.currentPage<1)
      this.currentPage=1;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      (      movieData: any) => {
        this.movieData=movieData;
      }
    )
    return false;
  }

  getNextPage(movieName:string): boolean {
    this.currentPage++;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      (      movieData: any) => {
        this.movieData=movieData;
      }
    )
    return false;
  }

}
