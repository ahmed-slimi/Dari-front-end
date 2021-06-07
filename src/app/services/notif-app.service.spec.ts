import { TestBed } from '@angular/core/testing';

import { NotifAppService } from './notif-app.service';

describe('NotifAppService', () => {
  let service: NotifAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
