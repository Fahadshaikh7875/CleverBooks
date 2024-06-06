import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyProblemsComponent } from './key-problems.component';

describe('KeyProblemsComponent', () => {
  let component: KeyProblemsComponent;
  let fixture: ComponentFixture<KeyProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyProblemsComponent]
    });
    fixture = TestBed.createComponent(KeyProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
