import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  title = 'series';
  series: Series [];

  constructor(private seriesService: SeriesService) { }

 
  ngOnInit(): void {
    this.getseries();
  }
  
 getseries(): void
 {
   this.seriesService.getSeries().subscribe((res: HttpResponse<any>) =>{
     this.series  = JSON.parse(res.body).seriesList.series;
   })
 }
}
