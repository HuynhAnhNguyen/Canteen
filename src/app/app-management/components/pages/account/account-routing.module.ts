import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountDemoComponent } from './account-demo/account-demo.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AccountDemoComponent }
    ])],
    exports: [RouterModule]
})
export class EmptyDemoRoutingModule { }
