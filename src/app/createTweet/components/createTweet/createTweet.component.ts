import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {

  }
  // tweetData: tweet | undefined
  tweetData = this.fb.nonNullable.group({
    content: ['', Validators.required],
    image: ['']
  })

  onSubmit() {
    console.log(this.tweetData)
  }


}

