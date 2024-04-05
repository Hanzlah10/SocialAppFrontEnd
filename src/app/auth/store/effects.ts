import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/authService.service";
import { inject } from "@angular/core";
import { authActions } from "./actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { currentUserInterface } from "../../shared/types/CurrentUser.interface";
import { PersistenceService } from "../../shared/services/persistence.service";
import { Router } from "@angular/router";

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
                        console.log(currentUser.token + " from effects")
                        console.log(currentUser.username + " from effects")
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

export const loginEffects = createEffect(
    (
        actions$ = inject(Actions),
        authService = inject(AuthService),
        persistenceService = inject(PersistenceService)
    ) => {
        return actions$.pipe(
            ofType(authActions.login),
            switchMap(({ request }) => {
                return authService.login(request).pipe(
                    map((currentUser: currentUserInterface) => {
                        // console.log(currentUser.token + " from effects")
                        // console.log(currentUser.username + " from effects")
                        persistenceService.set("token", currentUser.token)
                        return authActions.loginSuccess({ currentUser });
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

export const redirectAfterLogin = createEffect(
    (
        actions$ = inject(Actions),
        router = inject(Router)
    ) => {
        return actions$.pipe(
            ofType(authActions.loginSuccess),
            tap(() => {
                console.log("entered redirect effect")
                router.navigateByUrl('/');
            })
        )
    }, { dispatch: false, functional: true }
)

export const redirectToHomePage = createEffect(
    (
        actions$ = inject(Actions),
        router = inject(Router)
    ) => {
        return actions$.pipe(
            ofType(authActions.registerSuccess),
            tap(() => {
                console.log("entered redirect effect")
                router.navigateByUrl('/');
            })
        );
    },
    { functional: true, dispatch: false }
);
