import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeNgAComponent } from './iframe-ng-a.component';

describe('IframeNgAComponent', () => {
  let component: IframeNgAComponent;
  let fixture: ComponentFixture<IframeNgAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IframeNgAComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeNgAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
