import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent  {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        max: 150
      },
      y: {
        min: 0,
        max: 160 // cantidad de elementos en Y 
      },
    },
    plugins: {
      legend: { //muiestra los label arriba de la grafica
        display: true,
      }
    },
    animations: {
      tension: {
        duration: 3000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    
  };
  public barChartType: ChartType = 'bar';
  //cambiar el bar y poner cualquiera que se necesite


  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      {
         data: [ 65, 59, 80, 81, 56, 55, 40 ],
         label: 'Series update A',
         backgroundColor: '#F82F7F',
         hoverBackgroundColor: 'red'
      },
      { 
         data: [ 28, 48, 40, 19, 86, 27, 90 ], 
         label: 'Series B',
         backgroundColor: '#5F2FF8',
         hoverBackgroundColor: 'red'
      },
      { 
        data: [ 45, 14, 62, 11, 47, 75, 21 ], 
        label: 'Series C',
        backgroundColor: '#F0CA2C',
        hoverBackgroundColor: 'red'
     }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  // public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)];

    this.chart?.update();
  }

}
