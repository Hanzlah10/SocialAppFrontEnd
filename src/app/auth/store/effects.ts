import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/authService.service";
import { inject } from "@angular/core";
import { authActions } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { currentUserInterface } from "../../shared/types/CurrentUser.interface";

export const registerEffects = createEffect(
    (
        actions$ = inject(Actions),
        authService = inject(AuthService)
    ) => {
        return actions$.pipe(
            ofType(authActions.register),
            switchMap(({ request }) => {
                return authService.register(request).pipe(
                    map((currentUser: currentUserInterface) => {
                        return authActions.registerSuccess({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            authActions.registerFailure()
                        );
                    })
                );
            })
        );
    }, { functional: true }

);