import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { tweet } from '../../types/tweet.interface';

@Component({
  selector: 'app-create-tweet',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './createTweet.component.html',
  styleUrl: './createTweet.component.css',
})
export class CreateTweetComponent {

  // tweetData: tweet | undefined
  tweetData: any
  onSubmit() {
    console.log(this.tweetData)
  }


}

