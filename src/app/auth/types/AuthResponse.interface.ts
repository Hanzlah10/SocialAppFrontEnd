import { currentUserInterface } from "../../shared/types/CurrentUser.interface";

export interface AuthResponseInterface {
    statusCode: number,
    message: string,
    data: currentUserInterface,
    error: []
}


// export interface AuthLoginResponseInterface {
//     statusCode: number,
//     message: string,
//     data: {
//         token: object,
//         email: string,
//         username: string
//     },
//     error: []
// }