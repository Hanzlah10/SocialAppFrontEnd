import { currentUserInterface } from "../../shared/types/CurrentUser.interface";

export interface AuthResponseInterface {
    statusCode: number,
    message: string,
    data: currentUserInterface,
    error: []
}