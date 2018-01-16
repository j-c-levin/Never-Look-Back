import { TestBed, inject } from '@angular/core/testing';

import { WordcountGoalService } from './wordcount-goal.service';

describe('WordcountGoalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordcountGoalService]
    });
  });

  it('should be created', inject([WordcountGoalService], (service: WordcountGoalService) => {
    expect(service).toBeTruthy();
  }));
});
