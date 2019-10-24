import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private seriesUrl: string;

  constructor(private http: HttpClient) { 
   this.seriesUrl = 'http://localhost:8083/series';
  }

  public getSeries() {
    return this.http.get(this.seriesUrl);
  }
  
}

