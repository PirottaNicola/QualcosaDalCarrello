import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FetchData {

    public recuperaDati() {
        const data = fetch('api/prodotti')
            .then((res) => res.json())
            .then((json) => console.log(json));
        console.log(data);
        return data;
    }
}