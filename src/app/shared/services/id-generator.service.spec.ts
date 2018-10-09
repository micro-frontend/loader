import { TestBed } from '@angular/core/testing';

import { IdGenerator } from './id-generator.service';

describe('IdGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdGenerator = TestBed.get(IdGenerator);
    expect(service).toBeTruthy();
  });
});
