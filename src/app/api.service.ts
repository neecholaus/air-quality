import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	results = [];

	constructor() { }

	getResults(): Observable<Array<Number>> {
		this.results.push(this.results.length);

		return of(this.results);
	}
}
