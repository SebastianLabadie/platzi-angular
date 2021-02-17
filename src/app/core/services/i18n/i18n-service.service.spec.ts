import { TestBed } from '@angular/core/testing';

import { I18nServiceService } from './i18n-service.service';

describe('I18nServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: I18nServiceService = TestBed.get(I18nServiceService);
    expect(service).toBeTruthy();
  });
});
