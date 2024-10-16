import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Импортируем FormsModule
import { HttpClientModule } from '@angular/common/http';  // Импортируем HttpClientModule
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CheckPointComponent } from './check-point/check-point.component';

const routes: Routes = [
  { path: '', redirectTo: '/check-point', pathMatch: 'full' },
  { path: 'check-point', component: CheckPointComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CheckPointComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,  // Добавляем HttpClientModule
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
