import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../models/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class MockApiConsumerService {

  private readonly _httpClient = inject(HttpClient);

  fetchData(){
    return this._httpClient.get<Post[]>('/api/posts');
  }
}
