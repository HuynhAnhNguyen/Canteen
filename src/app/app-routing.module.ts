// import { RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { NotfoundComponent } from './app-management/components/notfound/notfound.component';
// import { AppLayoutComponent } from "./layout/app.layout.component";
// import { AuthGuard } from './app-management/service/auth-guard';

// @NgModule({
//     imports: [
//         RouterModule.forRoot([
//             {
//                 path: 'pages', component: AppLayoutComponent,
//                 children: [
//                     { path: 'dashboard', loadChildren: () => import('./app-management/components/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuard] },
//                     { path: '', loadChildren: () => import('./app-management/components/pages/pages.module').then(m => m.PagesModule) ,canActivate:[AuthGuard]},
//                 ],
//                 canActivate:[AuthGuard]
//             },
//             { path: 'auth', loadChildren: () => import('./app-management/components/auth/auth.module').then(m => m.AuthModule) },
//             { path: '', loadChildren: () => import('./app-management/components/landing/landing.module').then(m => m.LandingModule) },
//             { path: 'pages/notfound', component: NotfoundComponent },
//             { path: '**', redirectTo: 'pages/notfound' },
//         ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
//     ],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {
// }

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './app-management/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard } from './app-management/service/auth-guard';


// Định nghĩa danh sách tuyến đường (routes)
const routes: Routes = [
    // Khu vực dành cho người dùng đã đăng nhập (bảo vệ bằng AuthGuard)
    {
        path: 'pages',
        component: AppLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { 
                path: 'dashboard', 
                loadChildren: () => import('./app-management/components/dashboard/dashboard.module').then(m => m.DashboardModule),
                canActivate: [AuthGuard] 
            },
            { 
                path: '', 
                loadChildren: () => import('./app-management/components/pages/pages.module').then(m => m.PagesModule),
                canActivate: [AuthGuard] 
            }
        ]
    },
    
    // Khu vực xác thực (đăng nhập, đăng ký, quên mật khẩu,...)
    { 
        path: 'auth', 
        loadChildren: () => import('./app-management/components/auth/auth.module').then(m => m.AuthModule) 
    },

    // {
    //     path: 'cart',
    //     loadChildren: () => import('./app-management/components/auth/cart/cart.module').then(m => m.CartModule),
    //     data: { title: 'Giỏ hàng' }
    // }
    
    
    // Trang landing (trang chủ cho người chưa đăng nhập)
    { 
        path: '', 
        loadChildren: () => import('./app-management/components/landing/landing.module').then(m => m.LandingModule) 
    },
    
    // Trang lỗi 404
    { 
        path: 'pages/notfound', 
        component: NotfoundComponent 
    },
    
    // Mặc định chuyển hướng đến trang 404 nếu không tìm thấy đường dẫn
    { 
        path: '**', 
        redirectTo: 'pages/notfound' 
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: false, // Bỏ chế độ hash trong URL
            scrollPositionRestoration: 'enabled', // Khôi phục vị trí cuộn khi điều hướng
            anchorScrolling: 'enabled', // Hỗ trợ cuộn đến các phần tử có id (anchor links)
            onSameUrlNavigation: 'reload' // Tải lại trang khi điều hướng đến cùng một URL
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
