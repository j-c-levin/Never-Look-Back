import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingAreaComponent } from './writing-area.component';

describe('WritingAreaComponent', () => {
  let component: WritingAreaComponent;
  let fixture: ComponentFixture<WritingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
