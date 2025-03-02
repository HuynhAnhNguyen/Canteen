import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../service/auth-guard';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { AuthGuardAdmin } from '../../service/authGuard-Admin';
import { ActionHistoryComponent } from './action-history/action-history.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'manageAccount', component: ManageAccountComponent, canActivate:[AuthGuard,AuthGuardAdmin]},
        { path: 'action', component: ActionHistoryComponent, canActivate:[AuthGuard,AuthGuardAdmin]},
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
