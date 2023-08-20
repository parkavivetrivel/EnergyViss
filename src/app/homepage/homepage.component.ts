import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  gaugeType = 'semi' as const;
  size = 160;

  gaugeValue = 240.32;
  gaugeLabel = "Voltage(v)";
  animate = true;
  duration = 1500;

  gaugeValue1 = 11.07;
  gaugeLabel1 = "Current(A)";

  gaugeValue2 = 0.17;
  gaugeLabel2 = "Power(kW)";

  gaugeValue3 = 0.3;
  gaugeLabel3 = "Power Factor";
  max = 1;

  gaugeValue4 = 50.6;
  gaugeLabel4 = "Frequency(Hz)";

}