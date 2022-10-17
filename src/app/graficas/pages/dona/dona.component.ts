import { Component } from '@angular/core';
import { ChartData, ChartType, ChartEvent, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  {

    // Doughnut
    public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' ];

    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100, 230 ], backgroundColor: ['#F82F7F', '#5F2FF8', '#F0CA2C', '#0F74F0'] },
        { data: [ 50, 150, 120, 80 ],  backgroundColor: ['#F0CA2C', '#0F74F0','#5F2FF8', '#F82F7F' ]  },
        { data: [ 250, 130, 70, 95 ],  backgroundColor: ['#0F74F0', '#5F2FF8', '#F82F7F', '#F0CA2C']  }
      ],
      
    };

    public doughnutChartType: ChartType = 'doughnut';
  
    // events
    public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }
}
