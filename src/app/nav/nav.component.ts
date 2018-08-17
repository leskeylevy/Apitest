import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: []
})
export class NavComponent implements OnInit {
  giphy$;
  gif: any;

  constructor(private http: HttpClient) { }



  ngOnInit() {
    this.http.get('http://api.giphy.com/v1/gifs/trending?key=L90U1G5LoZogv9uUK14zpVVtNyaV8XKj&limit=150&rating=R').subscribe(
      data => {
        this.giphy$ = data.data
        // console.log(data);
        // console.log(data.data[1].id);

      }
    );
  }

}
