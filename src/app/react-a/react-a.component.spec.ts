import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactAComponent } from './react-a.component';

describe('ReactAComponent', () => {
  let component: ReactAComponent;
  let fixture: ComponentFixture<ReactAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactAComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
