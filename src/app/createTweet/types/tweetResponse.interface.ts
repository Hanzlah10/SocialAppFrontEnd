import { TweetRequestInterface } from "./tweetRequest.interface";

export interface TweetResponseInterface {

    statusCode: number,
    message: string,
    data: TweetRequestInterface,
    error: []

}