import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
