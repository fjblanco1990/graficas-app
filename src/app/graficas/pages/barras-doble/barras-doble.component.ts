import { Component, OnInit } from '@angular/core';
import { ChartType, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent {

  label = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ]
  data = [
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

  scalesVertical = {
      x: {
       
      },
      y: {
        min: 0,
        max: 100 // cantidad de elementos en Y 
      },
    }

    scalesHorizontal = {
      x: {
        max: 200
      },
      y: {
   
      },
    }

    public typeGraficaBar: ChartType = 'bar';
    public typeGraficaDonut: ChartType = 'doughnut';
    
}
