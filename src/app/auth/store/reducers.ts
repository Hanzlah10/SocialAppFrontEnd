import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/AuthState.interface";
import { authActions } from "./actions";

const intialState: AuthStateInterface = {
    currentUser: undefined,
    errors: null,
    loading: false
}

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        intialState,
        on(authActions.register, (state) => ({
            ...state
        })),
        on(authActions.registerSuccess, (state, actions) => ({
            ...state,
            currentUser: actions.currentUser
        })),
        on(authActions.registerFailure, (state, actions) => ({
            ...state,
            // errors: actions.type.
        })),
    )
})

export const {
    name: authFeatureKey,
    reducer: authReducer,
    selectCurrentUser,
    selectErrors,
    selectLoading
} = authFeature