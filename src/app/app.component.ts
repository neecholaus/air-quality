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
    API_URL = 'http://api.waqi.info/feed/buffalo/?token=demo';

    response: Response;

    constructor(private http: HttpClient) { }

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
        this.http.get(this.API_URL).pipe().subscribe((response) => {
            this.response = <Response>response;

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
