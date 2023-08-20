import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerFactorChartComponent } from './power-factor-chart.component';

describe('PowerFactorChartComponent', () => {
  let component: PowerFactorChartComponent;
  let fixture: ComponentFixture<PowerFactorChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerFactorChartComponent]
    });
    fixture = TestBed.createComponent(PowerFactorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
