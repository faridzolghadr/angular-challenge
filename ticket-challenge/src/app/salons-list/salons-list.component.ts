import { Component, OnInit } from '@angular/core';
import { SeatSalonsService } from '../seat-salons.service';

@Component({
  selector: 'app-salons-list',
  templateUrl: './salons-list.component.html',
  styleUrls: ['./salons-list.component.scss']
})
export class SalonsListComponent implements OnInit {
  maps: string[] = [];
  selectedMapId: string = '';
  mapDetail: number[][] = [];
  indexPlanSelected: number = -1;
  reservations: { mapId: string; x: number; y: number }[] = [];
  selectedSeats: { x: number; y: number }[] = [];

  constructor(private seatSalonsService: SeatSalonsService) { }

  ngOnInit(): void {
    this.getMaps();
  }

  getMaps(): void {
    this.seatSalonsService.getMaps().then((maps) => {
      this.maps = maps;
    });
  }

  selectMap(mapId: string, index: number): void {
    this.selectedMapId = mapId;
    this.indexPlanSelected = index + 1;
    this.seatSalonsService.getMapDetail(mapId).then((mapDetail) => {
      this.mapDetail = mapDetail;
    });
  }

  onSeatSelected(seat: { x: number; y: number }): void {
    const isReserved = this.reservations.some(
      (r) => r.mapId === this.selectedMapId && r.x === seat.x && r.y === seat.y
    );

    if (!isReserved) {

      const seatIndex = this.selectedSeats.findIndex((s) => s.x === seat.x && s.y === seat.y);
      if (seatIndex !== -1) {
        console.log('صندلی از رزرو شما خارج شد.')
        this.selectedSeats.splice(seatIndex, 1);
      } else {
        console.log('صندلی به رزرو شما در آمد.')
        this.selectedSeats.push(seat);
      }
    } else {
      console.log('این صندلی قبلاً رزرو شده است.');
    }
  }

  onSaveChange() {
    console.log('صندلی های رزرو شده:=>', this.selectedSeats, this.selectedMapId);
    alert('رزرو شما با موفقیت انجام شد.');
    this.selectedSeats = [];
    this.selectedMapId = '';
  }
}
