import { Component } from '@angular/core';

import {Chart,registerables} from 'node_modules/chart.js'
Chart.register(...registerables)
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

 constructor() {}


 ngOnInit():void{
this.RenderChart();
 }

 RenderChart(){
  const myChart = new Chart("piechart", {
    type: 'bar',
    data: {
        labels: ['NewUsers', 'Guest Users', 'Host Users', 'Host & Guest Users', 'Panned Users', 'Vip Users'],
        datasets: [{
            label: '# of Users',
            data: [12, 19, 3, 5, 2, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 

 const donughchart = new Chart("donughtchart", {
  type: 'pie',
  data: {
      labels: ['New Properties', 'Removed Proberties', 'Most Liked', 'Most Disliked', 'Panned ', '  VIP'],
      datasets: [{
          label: '# of Properties',
          data: [12, 19, 3, 8, 2, 120],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

}

 
}
