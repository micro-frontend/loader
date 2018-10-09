import { TestBed } from '@angular/core/testing';

import { StyleLoader } from './style-loader.service';

describe('StyleLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StyleLoader = TestBed.get(StyleLoader);
    expect(service).toBeTruthy();
  });
});
