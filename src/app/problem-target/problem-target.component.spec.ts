import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemTargetComponent } from './problem-target.component';

describe('ProblemTargetComponent', () => {
  let component: ProblemTargetComponent;
  let fixture: ComponentFixture<ProblemTargetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemTargetComponent]
    });
    fixture = TestBed.createComponent(ProblemTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
