import { Route } from "@angular/router";
import { CreateTweetComponent } from "./components/createTweet/createTweet.component";

export const createTweetRoutes: Route[] = [
    {
        path: '',
        component: CreateTweetComponent
    }
]