import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordcountComponent } from './wordcount.component';

describe('WordcountComponent', () => {
  let component: WordcountComponent;
  let fixture: ComponentFixture<WordcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
