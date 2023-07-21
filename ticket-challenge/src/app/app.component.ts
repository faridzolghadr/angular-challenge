import { Component, OnInit } from '@angular/core';
import { SalonsService } from './salons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  // اول از همه این بخش نوشتم تا اصلا بدونم ماجرا چیه و چه کاری باید انجام بدم
  // stadiumMap: number[][] = [];
  // loading: boolean = true;

  // constructor(private salonService: SalonsService) { }

  // ngOnInit() {
  //   this.getStadiumMap();
  // }

  // getStadiumMap() {
  //   this.salonService.getStadiumMap().subscribe(
  //     (map: number[][]) => {
  //       this.stadiumMap = map;
  //       this.loading = false;
  //     },
  //     (error) => {
  //       console.error('Error fetching stadium map:', error);
  //       this.loading = false;
  //     }
  //   );
  // }

  // selectSeat(row: number, col: number) {
  //   if (this.stadiumMap[row][col] === 0) {
  //     this.stadiumMap[row][col] = 1;
  //     this.salonService.reserveSeat(row, col).subscribe(
  //       (response) => console.log(response),
  //       (error) => console.error('Error reserving seat:', error)
  //     );
  //   }
  // }
}
