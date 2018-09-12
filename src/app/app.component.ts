import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as toastr from 'toastr';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'air-quality';

  ROOT_URL = 'http://api.waqi.info/feed/buffalo/?token=demo';

  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  getResponse(): void {  
    this.http.get(this.ROOT_URL).subscribe((response) => {
    	this.response = response

		let status = this.response.status;


		if(status == 'ok') {
			toastr.success('Location found.', 'Success!');
		} else {
			toastr.error('Location was not found.', 'Error!');
		}
    });
  }
}
