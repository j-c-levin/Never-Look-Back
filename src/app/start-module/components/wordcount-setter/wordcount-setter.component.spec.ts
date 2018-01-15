import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordcountSetterComponent } from './wordcount-setter.component';

describe('WordcountSetterComponent', () => {
  let component: WordcountSetterComponent;
  let fixture: ComponentFixture<WordcountSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordcountSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordcountSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
