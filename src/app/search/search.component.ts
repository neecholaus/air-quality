import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results = [];	

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  	
  }

  getResults(): void {  
  	this.apiService.getResults().subscribe(results => this.results = results);
  }

}
