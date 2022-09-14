import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  type = '';
  id = '' ;
  url = '';
  video: any;
  videos:any;
  
  constructor(private router: ActivatedRoute, private http:HttpClient ) { }

  ngOnInit(): void {
    this.type = this.router.snapshot.params['type'];
    this.id   =this.router.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url= 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url= 'http://localhost:4200/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url= 'http://localhost:4200/assets/data/popular-movies.json';
    }
    this.getVideo();
  }

  getVideo() { this.http.get(this.url).subscribe((videos) => {
    this.videos = videos;
    let index = this.videos.findIndex(
      (video: { id: string }) => video.id == this.id
    );
    if (index > -1) {
      this.video = this.videos[index];
    }
  });

  }
}
