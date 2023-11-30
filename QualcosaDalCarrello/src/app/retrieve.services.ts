import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FetchData {

    public async recuperaDati() {
        const data = await fetch('api/products')
            .then((res) => res.json());
        return data;
    }
}