import { createReducer, on } from '@ngrx/store';
import { Prodotto } from '../models/prodotto.module';
import { loadProdotti, loadProdottiSuccess } from './app.actions';

export interface AppState {
  prodotti: Prodotto[];
  error: string;
  status: 'pending' | 'loading' | 'success' | 'error';
}

export const initialState: AppState = {
  prodotti: [],
  error: '',
  status: 'pending',
};

// create a reducer function
export const prodottoReducer = createReducer(
  //* provide the initial state
  initialState,

  //* add one or more case reducer functions
  // when the loadProdotti action is dispatched, the reducer function will be called with the current state and the action as arguments and will return a new state
  on(loadProdotti, (state) => {
    console.log('loadProdotti - reducer', state);
    // return the new state
    return {
      ...state,
      status: 'loading' as 'loading', // as 'loading' è un cast che serve per dire che status è di tipo 'loading'
    };
  }),

  // when the loadProdottiSuccess action is dispatched, the reducer will be called, will add the products passed as payload to the state and will return a new state
  on(loadProdottiSuccess, (state, action) => {
    console.log('loadProdottiSuccess - reducer', action);
    // return the new state
    return {
      ...state,
      prodotti: action.prodotti,
      status: 'success' as 'success',
    };
  })
);
