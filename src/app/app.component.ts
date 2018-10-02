import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from './response';
import * as toastr from 'toastr';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private http: HttpClient) { }

    search = 'here';

    token = '44ec0d6619f00dcd5f84f6293c77529e5ad94b69';

    url = 'http://api.waqi.info/feed/' + this.search + '/?token=' + this.token;

    response: Response;

    ngOnInit() {
        toastr.options = {
            closeButton: false,
            debug: false,
            newestOnTop: false,
            progressBar: true,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false,
            onclick: null,
            showDuration: 300,
            hideDuration: '1000',
            ntimeOut: '5000',
            extendedTimeOut: '1000',
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut'
        };
    }

    getResponse(): void {        
        this.http.get(this.url).pipe().subscribe((response) => {
            this.response = <Response>response;
            console.log(response);

            if (this.response.status === 'ok') {
                toastr.success('Location found.', 'Success!');
            } else {
                toastr.error('Location was not found.', 'Error!');
            }
        });
    }

    clearResponse(): void {
        this.response = Response = null;

        toastr.success('Response was cleared.', 'Success!');
    }
}
