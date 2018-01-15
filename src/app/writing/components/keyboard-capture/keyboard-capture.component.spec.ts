import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardCaptureComponent } from './keyboard-capture.component';

describe('KeyboardCaptureComponent', () => {
  let component: KeyboardCaptureComponent;
  let fixture: ComponentFixture<KeyboardCaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardCaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
