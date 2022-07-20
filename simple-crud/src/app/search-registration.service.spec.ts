import { TestBed } from '@angular/core/testing';

import { SearchRegistrationService } from './search-registration.service';

describe('SearchRegistrationService', () => {
  let service: SearchRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
