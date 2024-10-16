import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
})
export class PolygonComponent {
  polygonPoints = [{ x: 0, y: 0 }];

  constructor(private http: HttpClient) {}

  addPoint() {
    this.polygonPoints.push({ x: 0, y: 0 });
  }

  createPolygon() {
    const request = {
      points: this.polygonPoints
    };

    this.http.post('/api/polygons', request).subscribe(
      (response: any) => {
        console.log('Polygon created', response);
      },
      error => {
        console.error('Error creating polygon:', error);
      }
    );
  }
}
