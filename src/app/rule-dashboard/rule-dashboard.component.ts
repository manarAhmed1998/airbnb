import { Component } from '@angular/core';

@Component({
  selector: 'app-rule-dashboard',
  templateUrl: './rule-dashboard.component.html',
  styleUrls: ['./rule-dashboard.component.css']
})
export class RuleDashboardComponent {
  roles = [
    { id: 1, role: 'guest'},
    { id: 2, role: 'host'  }
  ];
}
