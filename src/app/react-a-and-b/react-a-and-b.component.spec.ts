import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactAAndBComponent } from './react-a-and-b.component';

describe('ReactAAndBComponent', () => {
  let component: ReactAAndBComponent;
  let fixture: ComponentFixture<ReactAAndBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactAAndBComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactAAndBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
