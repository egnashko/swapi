import * as FilterActions from '../actions/filter.actions';

export type Action = FilterActions.SetFilter;

export function FilterReducer(state: {}, action: Action) {
    switch (action.type) {
        case FilterActions.SET_FILTER:
            return action.payload;
        default:
            return state;
    }
}