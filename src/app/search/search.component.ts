import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from '../nav/nav.component'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search$;
  gif: any;
  constructor(private http: HttpClient, public NavComponent: NavComponent) { }

  searchtest(input) {
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=L90U1G5LoZogv9uUK14zpVVtNyaV8XKj&limit=150&offset=0&rating=R&lang=en&q=' + input.value).subscribe(
      result => {
        this.NavComponent.giphy$ = result.data;
        // console.log(result.data);
      }

    )
  }
  ngOnInit() {
  }

}
