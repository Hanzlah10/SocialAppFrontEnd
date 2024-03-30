import { currentUserInterface } from "../../shared/types/CurrentUser.interface";

export interface AuthStateInterface {
    currentUser: currentUserInterface | null | undefined,
    loading: boolean,
    errors: null | [],
}