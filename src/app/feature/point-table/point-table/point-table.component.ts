import { Component } from '@angular/core';

@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.scss'],
})
export class PointTableComponent {
  displayedColumns: string[] = [
    'Position',
    'Club',
    'Won',
    'Draw',
    'Lost',
    'Points',
  ];

  dataSource = [
    { Position: 1, Club: 'Chelsea', Won: 23, Draw: 5, Lost: 1, Points: 74 },
    {
      Position: 2,
      Club: 'Manchester City',
      Won: 22,
      Draw: 5,
      Lost: 2,
      Points: 71,
    },
    { Position: 3, Club: 'Liverpool', Won: 21, Draw: 7, Lost: 1, Points: 70 },
    {
      Position: 4,
      Club: 'Manchester United',
      Won: 19,
      Draw: 8,
      Lost: 2,
      Points: 65,
    },
    { Position: 5, Club: 'Arsenal', Won: 18, Draw: 6, Lost: 5, Points: 60 },
    {
      Position: 6,
      Club: 'Tottenham Hotspur',
      Won: 18,
      Draw: 6,
      Lost: 5,
      Points: 60,
    },
    {
      Position: 7,
      Club: 'West Ham United',
      Won: 17,
      Draw: 6,
      Lost: 6,
      Points: 57,
    },
    {
      Position: 8,
      Club: 'Leicester City',
      Won: 16,
      Draw: 8,
      Lost: 5,
      Points: 56,
    },
    { Position: 9, Club: 'Everton', Won: 15, Draw: 7, Lost: 7, Points: 52 },
    {
      Position: 10,
      Club: 'Leeds United',
      Won: 14,
      Draw: 5,
      Lost: 10,
      Points: 47,
    },
    {
      Position: 11,
      Club: 'Aston Villa',
      Won: 13,
      Draw: 7,
      Lost: 9,
      Points: 46,
    },
    {
      Position: 12,
      Club: 'Newcastle United',
      Won: 12,
      Draw: 9,
      Lost: 8,
      Points: 45,
    },
    {
      Position: 13,
      Club: 'Crystal Palace',
      Won: 11,
      Draw: 6,
      Lost: 12,
      Points: 39,
    },
    {
      Position: 14,
      Club: 'Wolverhampton Wanderers',
      Won: 10,
      Draw: 8,
      Lost: 11,
      Points: 38,
    },
    { Position: 15, Club: 'Burnley', Won: 9, Draw: 9, Lost: 11, Points: 36 },
  ];

  constructor() {
    console.log('1');
  }
}
