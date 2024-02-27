import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffshoreTableComponent } from './offshore-table.component';

describe('OffshoreTableComponent', () => {
  let component: OffshoreTableComponent;
  let fixture: ComponentFixture<OffshoreTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffshoreTableComponent]
    });
    fixture = TestBed.createComponent(OffshoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
