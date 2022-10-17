import { Component, OnInit } from '@angular/core';
import { GraficasService } from './../../services/graficas.service';
import { ChartData, ChartType, ChartEvent, Color } from 'chart.js';
@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {
 // Doughnut
 public doughnutChartLabels: string[] = [
  //  'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' 
  ];

 public doughnutChartData: ChartData<'doughnut'> = {
   labels: this.doughnutChartLabels,
   datasets: [
    { data: [] }
    //  { data: [ 350, 450, 100, 230 ], backgroundColor: ['#F82F7F', '#5F2FF8', '#F0CA2C', '#0F74F0'] },    
   ],
   
 };

 public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSocialesDonaData().subscribe(
      ({ labels, datasets }) => {
        this.doughnutChartData = { labels, datasets };
          // labels:Object.keys(labels),
          // datasets:[ 
          //   { data: Object.values(values) }
          // ]
        }
      );
  }

    // this.graficasService.getDataRedesSociales().subscribe(
    //   result => {
    //     const Labels = Object.keys( result );
    //     const values = Object.values( result);
    //     this.doughnutChartLabels = Labels;
    //     // this.doughnutChartData.push( values );
    //     this.doughnutChartData = {
    //       labels:Object.keys(result),
    //       datasets:[ 
    //         { data: Object.values(result) }
    //       ]
    //     }
    //   }
    // )
  }


