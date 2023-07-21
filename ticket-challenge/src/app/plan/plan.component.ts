import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  @Input() mapDetail: number[][] = [];
  @Input() selectedSeats: { x: number; y: number }[] = []
  @Output() seatSelected: EventEmitter<{ x: number; y: number }> = new EventEmitter();

  selectedRows: number[] = [];

  constructor() { }

  ngOnInit(): void {
    // You should get the plan array from the: base-url/map/<map_id>
  }

  onSeatClick(x: number, y: number): void {
    if (this.mapDetail[y][x] === 0) {
      const selectedRowIndex = this.selectedRows.indexOf(y);
      if (selectedRowIndex !== -1) {
        const seatIndex = this.selectedSeats.findIndex((seat) => seat.x === x && seat.y === y);
        if (seatIndex !== -1) {
          this.selectedSeats.splice(seatIndex, 1);
        } else {
          this.selectedSeats.push({ x, y });
        }
      } else {
        this.selectedRows.push(y);
        this.selectedSeats = [{ x, y }];
      }

      this.seatSelected.emit({ x, y });
    }
  }

  isSeatSelected(x: number, y: number): boolean {
    return this.selectedRows.includes(y) && this.selectedSeats.some((seat) => seat.x === x && seat.y === y);
  }

  isHighlighted(x: number, y: number): boolean {
    return this.isSeatSelected(x, y) && this.mapDetail[y][x] === 0;
  }

}
