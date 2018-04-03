import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] set';

export class SetFilter implements Action {
    readonly type = SET_FILTER;
    constructor(public payload: any) {}
}