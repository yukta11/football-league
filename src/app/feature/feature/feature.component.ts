import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent {
  constructor(private route: Router) {}
  @ViewChild('sidenav') sidenav!: MatSidenav;
  toggleSideNav() {
    this.sidenav.toggle();
  }
  onLogout() {
    this.route.navigate(['/auth/login']);
  }
}
