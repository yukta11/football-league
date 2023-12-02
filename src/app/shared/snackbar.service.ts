import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class matSnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  showTopSnackBar(message: string): void {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 3000;

    this.snackBar.open(message, 'Dismiss', config);
  }
}
