import { TestBed } from '@angular/core/testing';

import { MacroExpander } from './macro-expander.service';

describe('MacroExpanderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MacroExpander = TestBed.get(MacroExpander);
    expect(service).toBeTruthy();
  });
});
