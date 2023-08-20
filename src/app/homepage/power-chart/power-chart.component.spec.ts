import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerChartComponent } from './power-chart.component';

describe('PowerChartComponent', () => {
  let component: PowerChartComponent;
  let fixture: ComponentFixture<PowerChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerChartComponent]
    });
    fixture = TestBed.createComponent(PowerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
