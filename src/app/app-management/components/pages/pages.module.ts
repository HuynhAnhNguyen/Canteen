import { AppComponent } from './../../../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ToastModule } from 'primeng/toast';
// import { TableControlComponent } from '../customize/table-control/table-control.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import {MultiSelectModule} from 'primeng/multiselect';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import {PasswordModule} from 'primeng/password';
import { LoadingComponent } from './loading/loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { TagModule } from 'primeng/tag';
import { ActionHistoryComponent } from './action-history/action-history.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    declarations: [
      LoadingComponent,
      ManageAccountComponent,
      ActionHistoryComponent,
      ManageOrderComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
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
        CheckboxModule
    ],
    exports: [LoadingComponent]
})
export class PagesModule { }
