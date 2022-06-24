import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedHistoryComponent } from './calculated-history.component';

describe('CalculatedHistoryComponent', () => {
  let component: CalculatedHistoryComponent;
  let fixture: ComponentFixture<CalculatedHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatedHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
