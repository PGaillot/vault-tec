import { TestBed } from '@angular/core/testing';

import { SpecialAccountService } from './special-account.service';

describe('SpecialAccountService', () => {
  let service: SpecialAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
