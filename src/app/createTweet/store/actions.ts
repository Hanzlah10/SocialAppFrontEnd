import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { TweetRequestInterface } from "../types/tweetRequest.interface";
import { TweetInterface } from "../types/tweet.interface";

export const createTweetActions = createActionGroup({
    source: 'CreateTweet',
    events: {
        'Create Tweet': props<TweetRequestInterface>(),
        'Create Tweet Success': props<TweetInterface>(),
        'Create Tweet Failure': emptyProps()
    }
})