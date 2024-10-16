import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-check-point',
  templateUrl: './check-point.component.html',
})
export class CheckPointComponent {
  polygonId!: number;
  point = { x: 0, y: 0 };
  result: any = null;
  counter: number = 0;

  constructor(private http: HttpClient) {}

  checkPoint() {
    const request = {
      polygonId: this.polygonId,
      point: this.point
    };

    this.http.post('http://localhost:5000/api/polygons/check-point', request).subscribe(
      (response: any) => {
        this.result = response;
      },
      error => {
        console.error('Error checking point:', error);
      }
    );
  }

  incrementCounter() {
    this.http.post<any>('http://localhost:5000/api/polygons/increment-counter', {})
      .subscribe(response => {
        this.counter = response.counter;
      });
  }
}
