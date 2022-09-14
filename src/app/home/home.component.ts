import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingVideos: any;
  theatreVideos :any;
  popularVideos: any;

  constructor(private http: HttpClient, private router: Router ) {}

  ngOnInit(): void {
    this.getTrendingVideos();
    this.getTheatreVideos();
    this.getPopularVideos();
  }

  getTrendingVideos() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((videos) => {
        this.trendingVideos = videos;
      
      });
  }

  getTheatreVideos() {
    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((videos) => {
        this.theatreVideos = videos;
     
      });
  }

  getPopularVideos() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((videos) => {
        this.popularVideos = videos;
     
      });
  }

  goToVideos(type:string , id:string) {
    this.router.navigate(['movie',type,id]);
  }
}
