import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppletBuilderComponent } from './applet-builder.component';

describe('AppletBuilderComponent', () => {
  let component: AppletBuilderComponent;
  let fixture: ComponentFixture<AppletBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppletBuilderComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppletBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
