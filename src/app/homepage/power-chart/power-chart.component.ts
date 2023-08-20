import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { multi } from './../data';
@Component({
  selector: 'app-power-chart',
  templateUrl: './power-chart.component.html',
  styleUrls: ['./power-chart.component.css']
})
export class PowerChartComponent {

  constructor() {
    Object.assign(this, { multi });
  }
  multi: any[] | undefined;
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  timeline: boolean = true;

  colorScheme = {
    domain: [  '#042497'],
    group: ScaleType.Ordinal, 
    selectable: true, 
    name: 'Customer Usage', 
  };


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
