import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/authService.service";
import { inject } from "@angular/core";
import { authActions } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { currentUserInterface } from "../../shared/types/CurrentUser.interface";
import { RegisterRequestInterface } from "../types/RegisterRequest.interface";
import { AuthLoginResponseInterface } from "../types/AuthResponse.interface";

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
        authService = inject(AuthService)
    ) => {
        return actions$.pipe(
            ofType(authActions.login),
            switchMap(({ request }) => {
                return authService.login(request).pipe(
                    map((currentUser: currentUserInterface) => {
                        console.log(currentUser.token + " from effects")
                        console.log(currentUser.username + " from effects")
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




// export const loginEffects = createEffect(
//     (
//         actions$ = inject(Actions),
//         authService = inject(AuthService)
//     ) => {
//         return actions$.pipe(
//             ofType(authActions.login),
//             switchMap(({ request }) => {
//                 return authService.login(request).pipe(
//                     map((loggedinUser: currentUserInterface) => {
//                         return authActions.loginSuccess({ currentUser: loggedinUser })
//                     }),
//                 )
//             })
//         )
//     }
// )

