import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfcaFormComponent } from './ofca-form.component';

describe('OfcaFormComponent', () => {
  let component: OfcaFormComponent;
  let fixture: ComponentFixture<OfcaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfcaFormComponent]
    });
    fixture = TestBed.createComponent(OfcaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
