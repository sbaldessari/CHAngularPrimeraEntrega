import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;

  constructor(private router: Router, private route: ActivatedRoute){}

  logout(): void {
    this.router.navigate(['auth', 'login'])
  }
  
}
