import { Action } from '@ngrx/store';
import { characterModel } from '../models/characterModel';

export const SET_LIST = '[CharList] setted';

export class SetList implements Action {
    readonly type = SET_LIST;
    constructor(public payload: characterModel[]) {}
}

export type Action = SetList;