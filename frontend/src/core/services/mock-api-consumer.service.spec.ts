import { TestBed } from '@angular/core/testing';

import { MockApiConsumerService } from './mock-api-consumer.service';

describe('MockApiConsumerService', () => {
  let service: MockApiConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockApiConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
