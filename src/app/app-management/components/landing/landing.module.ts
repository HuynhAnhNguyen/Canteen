import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NgxPaginationModule } from 'ngx-pagination';
import { Dialog, DialogModule } from 'primeng/dialog';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        ToastModule,
        NgxPaginationModule,
        DialogModule,
    ],
    declarations: [LandingComponent],
})
export class LandingModule {}
