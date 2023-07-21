import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanComponent } from './plan/plan.component';
import { SalonsListComponent } from './salons-list/salons-list.component';
import { SalonsService } from './salons.service';
import { HttpClientModule } from '@angular/common/http';
import { SeatSalonsService } from './seat-salons.service';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    SalonsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SalonsService, SeatSalonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
