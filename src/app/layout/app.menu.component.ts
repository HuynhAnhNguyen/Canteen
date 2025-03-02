import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../app-management/service/auth.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService,private authService: AuthService) { }

    ngOnInit() {
        if(this.authService.getRole() == 'ROLE_ADMIN') {
            this.model = [
                {
                    label: 'Home',
                    items: [
                        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/pages/dashboard'] }
                    ]
                },
               
                {
                    label: 'Admin',
                    icon: 'pi pi-fw pi-briefcase',
                    routerLink: ['/pages'],
                    items: [
                        {
                            label: 'Quản lý tài khoản',
                            icon: 'pi pi-fw pi-sign-in',
                            routerLink: ['/pages/manageAccount']
                        }, {
                            label: 'Lịch sử hoạt động',
                            icon: 'pi pi-fw pi-sign-in',
                            routerLink: ['/pages/action']
                        },
                        {
                            label: 'Landing',
                            icon: 'pi pi-fw pi-globe',
                            routerLink: ['/']
                        }
                      
                    ]
                },
             
            ];
        } else if(this.authService.getRole()== 'ROLE_STAFF') {
            this.model = [
                {
                    label: 'Home',
                    items: [
                        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/pages/dashboard'] }
                    ]
                },
              
                {
                    label: 'Nhân viên',
                    icon: 'pi pi-fw pi-briefcase',
                    routerLink: ['/pages'],
                    items: [
                       
                        {
                            label: 'Landing',
                            icon: 'pi pi-fw pi-globe',
                            routerLink: ['/']
                        }
                      
                    ]
                },
             
            ];
        }
        
    }
}
