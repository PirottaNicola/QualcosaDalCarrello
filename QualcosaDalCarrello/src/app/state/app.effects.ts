import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ProductService } from './../retrieve.services';
import { loadProdotti, loadProdottiSuccess } from './app.actions';

@Injectable()
export class AppEffects {
  // I create and effect that listens for the loadProdotti action and then calls the ProductService to get the products, and then dispatches the loadProdottiSuccess action with the products as payload.
  loadProdotti$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProdotti),
      mergeMap(() => {
        return this.productService.getProducts().pipe(
          map((prodotti) => {
            console.log('loadProdotti$ effect', prodotti);
            return loadProdottiSuccess({ prodotti });
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
