import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfacTableComponent } from './ofac-table.component';

describe('OfacTableComponent', () => {
  let component: OfacTableComponent;
  let fixture: ComponentFixture<OfacTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfacTableComponent]
    });
    fixture = TestBed.createComponent(OfacTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
