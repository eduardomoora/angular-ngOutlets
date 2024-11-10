import { TestBed } from '@angular/core/testing';

import { WidgetActionsService } from './widget-actions.service';

describe('WidgetActionsService', () => {
  let service: WidgetActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
