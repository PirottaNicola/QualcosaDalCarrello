import { createAction, props } from '@ngrx/store';
import { Prodotto } from '../models/prodotto.module';

// azione che carica i prodotti
export const loadProdotti = createAction('loadProdotti');

// azione che carica i prodotti con successo (dispatched by the effect when the products are loaded)
export const loadProdottiSuccess = createAction(
    'loadProdottiSuccess',
    props<{ prodotti: Prodotto[] }>()
);
