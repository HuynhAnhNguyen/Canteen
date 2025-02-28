import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActiveAccountComponent } from './active-account/active-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'forgot-password', component:ForgotPasswordComponent},
        { path: 'reset-password',  component: ResetPasswordComponent},
        { path: 'signup', component: SignUpComponent},
        { path: 'active', component: ActiveAccountComponent},
        { path: 'cart', component: CartComponent},
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
