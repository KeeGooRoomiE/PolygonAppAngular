import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckPointComponent } from './check-point/check-point.component';
import { PolygonComponent } from './polygon/polygon.component';

const routes: Routes = [
  { path: 'check-point', component: CheckPointComponent },
  { path: 'polygon', component: PolygonComponent },
  { path: '', redirectTo: '/check-point', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
