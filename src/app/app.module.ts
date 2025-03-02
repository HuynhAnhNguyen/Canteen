import { AuthGuard } from './app-management/service/auth-guard';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './app-management/components/notfound/notfound.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { OrderHistoryComponent } from './app-management/components/auth/order-history/order-history.component';
// import { OrderHistoryComponent } from './app-management/components/auth/order-history/order-history.component';
// import { CartComponent } from './app-management/components/auth/cart/cart.component';
// import { LandingComponent } from './app-management/components/landing/landing.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, OrderHistoryComponent,

    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
      AuthGuard,JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        MessageService,ConfirmationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
