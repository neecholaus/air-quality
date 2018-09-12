import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results = null;	

  testUrl = 'http://api.waqi.info/feed/buffalo/?token=demo';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  	
  }

  getResults(): void {  
  	// this.apiService.getResults().subscribe(results => this.results = results);

    this.http.get(this.testUrl).subscribe(results => this.results = results);
  }

}
