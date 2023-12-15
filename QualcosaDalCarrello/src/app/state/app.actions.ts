import { createAction, props } from "@ngrx/store";
import { Utente } from "../models/utente.module";


export const getUtente = createAction("[utente] get all");

export const getUtenteSuccess = createAction("[utente] get all success");
