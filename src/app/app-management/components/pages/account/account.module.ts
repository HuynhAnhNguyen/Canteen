import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './account-routing.module';
import { AccountDemoComponent } from './account-demo/account-demo.component';

@NgModule({
    imports: [
        CommonModule,
        EmptyDemoRoutingModule
    ],
    declarations: [ AccountDemoComponent]
})
export class AccountModule { }
