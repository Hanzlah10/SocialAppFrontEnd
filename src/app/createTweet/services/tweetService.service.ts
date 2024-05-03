import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TweetRequestInterface } from '../types/tweetRequest.interface';
import { registerRoutes } from '../../auth/auth.routes';
import { environment } from '../../../environments/environment.development';
import { TweetResponseInterface } from '../types/tweetResponse.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  constructor(private http: HttpClient) { }
  url = environment.apiUrl + '/register'


  createTweet(tweetData: TweetRequestInterface) {
    return this.http
      .post<TweetResponseInterface>(this.url, tweetData)
      .pipe(map(response => response.data))
  }
}
