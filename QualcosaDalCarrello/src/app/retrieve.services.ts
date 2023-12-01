import { Injectable } from "@angular/core";
import axios from 'axios';
@Injectable({
    providedIn: 'root'
})
export class FetchData {
    public async recuperaDati() {
        axios.get('api/products')
            .then(function (response: any) {
                // handle success
                console.log(response);
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}