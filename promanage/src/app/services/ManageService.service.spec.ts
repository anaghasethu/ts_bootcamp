import { TestBed } from '@angular/core/testing';

import { ManagementServiceService } from './ManageService.service';

describe('ManagementServiceService', () => {
  let service: ManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
