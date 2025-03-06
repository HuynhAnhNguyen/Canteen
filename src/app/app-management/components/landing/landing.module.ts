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
<<<<<<< Updated upstream
=======
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
        FormsModule,
        CommonModule,
        ToastModule,
        TableModule,
        ButtonModule,
        ToolbarModule,
        DialogModule,
        FormsModule,
        InputTextModule,
        TooltipModule,
        MultiSelectModule,
        ConfirmDialogModule,
        DropdownModule,
        PasswordModule,
        ProgressSpinnerModule,
        TagModule,
        CheckboxModule,
>>>>>>> Stashed changes
    ],
    declarations: [LandingComponent],
})
export class LandingModule {}
