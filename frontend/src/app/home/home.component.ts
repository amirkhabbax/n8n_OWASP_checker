import { Component, inject, OnInit, signal } from '@angular/core';
import { MockApiConsumerService } from '../../core/services/mock-api-consumer.service';
import { Post } from '../../core/models/Post.interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _MockApiConsumerService = inject(MockApiConsumerService);
  fetchedPosts = signal<Post[]>([]);
  ngOnInit(): void {
    this._MockApiConsumerService.fetchData().subscribe((res) => {
      if (res) {
        this.fetchedPosts.set(res);
      }
    });

    // INTENTIONALLY VULNERABLE — for security detector testing only.
    const userInput = 'test';
    const element = document.createElement('div');
    element.innerHTML = userInput;
  }
}
