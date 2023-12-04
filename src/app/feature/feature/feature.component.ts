import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent {
  constructor(private route: Router, private authService: AuthService) {}
  @ViewChild('sidenav') sidenav!: MatSidenav;
  toggleSideNav() {
    this.sidenav.toggle();
  }
  onLogout() {
    this.authService.logout();
    this.route.navigate(['/auth/login']);
  }
}
