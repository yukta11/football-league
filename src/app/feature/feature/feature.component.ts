import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  toggleSideNav() {
    this.sidenav.toggle();
  }
}
