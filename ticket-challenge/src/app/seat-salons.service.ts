import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatSalonsService {

  getMaps(): Promise<string[]> {
    return Promise.resolve(['m213', 'm654', 'm63', 'm6888']);
  }

  getMapDetail(mapId: string): Promise<number[][]> {
    return Promise.resolve([
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ]);
  }

  buyTicket(mapId: string, x: number, y: number): Promise<void> {
    return Promise.resolve();
  }

}
