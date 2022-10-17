import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean =false;
  @Input() dataGrafica!: any;
  @Input() labelsGrafica!: any;
  @Input() mostrarLegends: boolean = true;
  @Input() responsive: boolean = true;
  @Input() scales: any; 
  public barChartData: ChartData<'bar'> = { datasets: [], labels: []  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        max: 0
      },
      y: {
        min: 0,
        max: 0 // cantidad de elementos en Y 
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


  
  constructor() {}

  ngOnInit(): void {
      if (this.horizontal) {
        this.barChartOptions!.indexAxis = 'y';
      }
   
      this.barChartOptions!.plugins!.legend!.display = this.mostrarLegends;
      this.barChartOptions!.responsive = this.responsive;
      this.barChartOptions!.scales = this.scales;
      
      this.barChartData.datasets = this.dataGrafica;
      this.barChartData.labels = this.labelsGrafica;
  }

 


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
