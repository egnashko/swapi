import * as CharListActions from '../actions/charecters-list.actions';
import { characterModel } from '../models/characterModel';

export type Action = CharListActions.Action;

// const defaultList: characterModel[] = [];

export function CharecterListReducer(state: characterModel[] = [], action: Action) {
    switch (action.type) {
        case CharListActions.SET_LIST:
            return action.payload;
        default:
            return state;
    }
}