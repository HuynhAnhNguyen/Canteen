"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[958],{5958:(de,y,r)=>{r.r(y),r.d(y,{LandingModule:()=>se});var s=r(9808),d=r(1891),Z=r(5861),m=r(520),S=r(2132),c=r(2340),A=r(4990),e=r(7587);let k=(()=>{class n{constructor(t){this.http=t,this.apiUrl=c.N.backendApiUrl+"/api/v1/project/auth/food/findAllAvailable"}getAllFoods(){return this.http.get(this.apiUrl)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var E=r(8568),O=r(8874),u=r(9783),f=r(3986),_=r(845),x=r(7773),v=r(9966),T=r(5315),p=r(3075),M=r(1424);function I(n,o){if(1&n&&(e.TgZ(0,"span",44),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.infoShop.name)}}const D=function(){return["/auth/gio-hang"]};function L(n,o){1&n&&(e.TgZ(0,"a",45)(1,"span"),e._uU(2,"Gi\u1ecf h\xe0ng"),e.qZA()()),2&n&&e.Q6J("routerLink",e.DdM(1,D))}function F(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",46),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.showLoginAlert())}),e.TgZ(1,"span"),e._uU(2,"Gi\u1ecf h\xe0ng"),e.qZA()()}}function U(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",46),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.showDialogInfoShop())}),e.TgZ(1,"span"),e._uU(2,"Admin"),e.qZA()()}}function N(n,o){1&n&&(e.TgZ(0,"div"),e._UZ(1,"button",47)(2,"button",48),e.qZA())}function j(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e._UZ(1,"button",49),e.TgZ(2,"button",50),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.logout())}),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(1),e.MGl("label","Xin ch\xe0o ",t.fullname,"")}}function J(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",61)(1,"div",62),e._UZ(2,"img",63),e.TgZ(3,"h2"),e._uU(4),e.qZA(),e.TgZ(5,"p")(6,"strong"),e._uU(7,"Gi\xe1:"),e.qZA(),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"p")(11,"strong"),e._uU(12,"M\xf4 t\u1ea3:"),e.qZA(),e._uU(13),e.qZA(),e.TgZ(14,"button",64),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.closeDetail())}),e._uU(15,"\u0110\xf3ng"),e.qZA()()()}if(2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("src",t.backendApiUrl+"/api/v1/project/auth/"+(null==t.selectedFood?null:t.selectedFood.imageUrl),e.LSH),e.xp6(2),e.Oqu(null==t.selectedFood?null:t.selectedFood.name),e.xp6(4),e.hij(" ",e.xi3(9,4,null==t.selectedFood?null:t.selectedFood.price,"1.0-2")," VND"),e.xp6(5),e.hij(" ",null==t.selectedFood?null:t.selectedFood.description,"")}}function q(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",51)(1,"div",52),e._UZ(2,"img",53),e.TgZ(3,"div",54)(4,"h5",55),e._uU(5),e.qZA(),e.TgZ(6,"p",56),e._uU(7),e.ALo(8,"number"),e.qZA(),e.TgZ(9,"div",57)(10,"button",58),e.NdJ("click",function(){const l=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.viewDetails(l))}),e._uU(11,"Xem chi ti\u1ebft"),e.qZA(),e.TgZ(12,"button",59),e.NdJ("click",function(){const l=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.addToCart(l))}),e._uU(13,"Th\xeam v\xe0o gi\u1ecf h\xe0ng"),e.qZA()()(),e.YNc(14,J,16,7,"div",60),e.qZA()()}if(2&n){const t=o.$implicit,i=e.oxw();e.xp6(2),e.Q6J("src",i.backendApiUrl+"/api/v1/project/auth/"+t.imageUrl,e.LSH),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij("",e.xi3(8,4,t.price,"1.0-2")," VND"),e.xp6(7),e.Q6J("ngIf",i.showDetailModal)}}function z(n,o){if(1&n&&(e.TgZ(0,"div",65)(1,"a",66),e._UZ(2,"img",67),e.TgZ(3,"h4",68),e._uU(4),e.qZA()(),e.TgZ(5,"p",39),e._uU(6),e.qZA(),e.TgZ(7,"p",39),e._uU(8),e.qZA()()),2&n){const t=e.oxw();e.xp6(4),e.Oqu(t.infoShop.name),e.xp6(2),e.hij("Th\u1eddi gian m\u1edf c\u1eeda: ",t.infoShop.openTime,""),e.xp6(2),e.hij("\u0110\u1ecba ch\u1ec9: ",t.infoShop.adress," ")}}function Q(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",69)(1,"div",70)(2,"label",71),e._uU(3,"T\xean c\u1eeda h\xe0ng"),e.qZA(),e.TgZ(4,"input",72),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.infoShop.name=a)}),e.qZA()(),e.TgZ(5,"div",70)(6,"label",73),e._uU(7,"\u0110\u1ecba ch\u1ec9"),e.qZA(),e.TgZ(8,"input",74),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.infoShop.adress=a)}),e.qZA()(),e.TgZ(9,"div",70)(10,"label",73),e._uU(11,"Email"),e.qZA(),e.TgZ(12,"input",74),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.infoShop.email=a)}),e.qZA()(),e.TgZ(13,"div",70)(14,"label",75),e._uU(15,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),e.qZA(),e.TgZ(16,"input",76),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.infoShop.phone=a)}),e.qZA()(),e.TgZ(17,"div",70)(18,"label",75),e._uU(19,"M\xf4 t\u1ea3"),e.qZA(),e.TgZ(20,"input",77),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.infoShop.description=a)}),e.qZA()(),e.TgZ(21,"div",70)(22,"label",75),e._uU(23,"Th\u1eddi gian ho\u1ea1t \u0111\u1ed9ng"),e.qZA(),e.TgZ(24,"input",78),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.infoShop.openTime=a)}),e.qZA()(),e.TgZ(25,"div",70)(26,"label",79),e._uU(27,"H\xecnh \u1ea3nh"),e.qZA(),e.TgZ(28,"div",80)(29,"input",81),e.NdJ("change",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.onFileSelectedUpdate(a))}),e.qZA(),e.TgZ(30,"label",82),e._uU(31,"Ch\u1ecdn h\xecnh \u1ea3nh"),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.infoShop.name),e.xp6(4),e.Q6J("ngModel",t.infoShop.adress),e.xp6(4),e.Q6J("ngModel",t.infoShop.email),e.xp6(4),e.Q6J("ngModel",t.infoShop.phone),e.xp6(4),e.Q6J("ngModel",t.infoShop.description),e.xp6(4),e.Q6J("ngModel",t.infoShop.openTime)}}function B(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",83),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.infoShopUpdate())}),e.qZA()}}const H=function(){return[]},R=function(n,o){return{itemsPerPage:n,currentPage:o}},Y=function(){return{width:"60vw",height:"35vw"}},G=function(){return{overflow:"scroll"}},K=function(){return{"960px":"75vw","640px":"100vw"}};let V=(()=>{class n{constructor(t,i,a,l,g,ce){this.foodService=t,this.layoutService=i,this.router=a,this.authService=l,this.http=g,this.messageService=ce,this.isAdmin="ROLE_ADMIN",this.showInfoShop=!1,this.infoShop={},this.isLoggedIn=!1,this.fullname="",this.foods=[],this.accountId="",this.email="",this.phonenumber="",this.selectedFood=null,this.showDetailModal=!1,this.page=1,this.pageSize=9,this.backendApiUrl="",this.backendApiUrl=c.N.backendApiUrl,this.stompClient=new A.K({brokerURL:c.N.backendApiUrl+"/ws?token="+this.authService.getToken(),debug:b=>console.log(b),reconnectDelay:5e3,heartbeatIncoming:4e3,heartbeatOutgoing:4e3,beforeConnect:()=>{this.stompClient.brokerURL=c.N.backendApiUrl+"/ws?token="+this.authService.getToken()}}),this.stompClient.onConnect=b=>{console.log("Connected: "+b);const P=C=>{let h;try{h=JSON.parse(C.body)}catch(we){h=C.body}switch(console.log("\u2705 N\u1ed9i dung th\xf4ng b\xe1o:",h),console.log(C),h){case"preparingOrder":this.messageService.add({severity:"success",summary:"\u0110\xe3 x\xe1c nh\u1eadn \u0111\u01a1n h\xe0ng, \u0111\u01a1n h\xe0ng c\u1ee7a b\u1ea1n \u0111ang \u0111\u01b0\u1ee3c chu\u1ea9n b\u1ecb"});break;case"doneOrder":this.messageService.add({severity:"success",summary:"\u0110\u01a1n h\xe0ng \u0111\xe3 ho\xe0n th\xe0nh"});break;case"cancelOrder":this.messageService.add({severity:"warn",summary:"\u0110\u01a1n h\xe0ng \u0111\xe3 h\u1ee7y"});break;case"rejectOrder":this.messageService.add({severity:"warn",summary:"\u0110\u01a1n h\xe0ng b\u1ecb h\u1ee7y do b\u1ea1n kh\xf4ng \u0111\u1ebfn nh\u1eadn h\xe0ng"})}this.loadFoods()};this.stompClient.subscribe("/user/queue/notifications",P),this.stompClient.subscribe("/topic/public",P)},this.stompClient.onDisconnect=()=>{console.log("Disconnected!")},this.connect()}ngOnInit(){this.header=(new m.WM).set(S.ds.AUTHORIZATION,this.authService.getToken()),this.loadFoods(),this.checkLoginStatus(),this.getCanteenInfo(),this.isAdmin=this.authService.getRole()}ngOnDestroy(){this.disconnect()}showDialogInfoShop(){this.showInfoShop=!this.showInfoShop}infoShopUpdate(){var t=this;return(0,Z.Z)(function*(){const i={name:t.infoShop.name,adress:t.infoShop.adress,email:t.infoShop.email,phone:t.infoShop.phone,description:t.infoShop.description,openTime:t.infoShop.openTime,imageUrl:t.infoShop.imageUrl};yield t.http.post(c.N.backendApiUrl+"/api/v1/project/canteenInfo/update",i,{headers:t.header}).toPromise().then(a=>{Response?(t.messageService.add({severity:"success",summary:"C\u1eadp nh\u1eadt th\xf4ng tin th\xe0nh c\xf4ng"}),t.showInfoShop=!1,t.getCanteenInfo()):t.messageService.add({severity:"error",summary:"Kh\xf4ng th\u1ec3 c\u1eadp nh\u1eadt th\xf4ng tin"})},a=>{t.messageService.add({severity:"error",summary:"Error occur"})})})()}showLoginAlert(){this.messageService.add({severity:"warn",summary:"Ch\u01b0a \u0111\u0103ng nh\u1eadp",detail:"Vui l\xf2ng \u0111\u0103ng nh\u1eadp tr\u01b0\u1edbc khi v\xe0o gi\u1ecf h\xe0ng."})}checkLoginStatus(){this.isLoggedIn=this.authService.isAuthenticated(),this.isLoggedIn&&(this.fullname=this.authService.getFullname(),this.accountId=this.authService.getAccountid(),this.email=this.authService.getEmail(),this.phonenumber=this.authService.getPhonenumber())}onPageChange(t){this.page=t}logout(){this.authService.logout(),this.isLoggedIn=!1,this.fullname=""}loadFoods(){this.foodService.getAllFoods().subscribe(t=>{this.foods=t.data},t=>{console.error("L\u1ed7i khi l\u1ea5y API",t)})}loadMoreFoods(){this.loadFoods()}viewDetails(t){this.selectedFood=t,this.showDetailModal=!0}closeDetail(){this.showDetailModal=!1,this.selectedFood=null}addToCart(t){if(!this.isLoggedIn)return alert("B\u1ea1n c\u1ea7n \u0111\u0103ng nh\u1eadp \u0111\u1ec3 th\xeam s\u1ea3n ph\u1ea9m v\xe0o gi\u1ecf h\xe0ng."),void this.router.navigate(["/auth/dang-nhap"]);this.http.post(c.N.backendApiUrl+"/api/v1/project/cartItem/add",{accountId:this.accountId,foodId:t.id,quantity:1,cartId:0},{headers:this.header}).subscribe(a=>{this.messageService.add({severity:"success",summary:"Th\xe0nh c\xf4ng",detail:"S\u1ea3n ph\u1ea9m \u0111\xe3 \u0111\u01b0\u1ee3c th\xeam v\xe0o gi\u1ecf h\xe0ng!"})},a=>{console.error("L\u1ed7i khi th\xeam v\xe0o gi\u1ecf h\xe0ng:",a),this.messageService.add({severity:"error",summary:"L\u1ed7i",detail:"Kh\xf4ng th\u1ec3 th\xeam v\xe0o gi\u1ecf h\xe0ng. Vui l\xf2ng th\u1eed l\u1ea1i!"})})}navigateToLanding(){this.router.navigate(["/pages/landing"],{fragment:"home"})}getCanteenInfo(){this.http.get(c.N.backendApiUrl+"/api/v1/project/auth/canteenInfo/get").subscribe(t=>{this.infoShop=null==t?void 0:t.data,console.log("Canteen Info:",this.infoShop)},t=>{console.error("Error fetching canteen info:",t)})}connect(){this.stompClient.activate()}disconnect(){this.stompClient.deactivate()}onFileSelectedUpdate(t){const i=t.target.files[0];if(i){const a=new FormData;a.append("file",i),this.http.post(c.N.backendApiUrl+"/api/v1/project/auth/upload",a).toPromise().then(l=>{0===l.resultCode?(this.infoShop.imageUrl=l.data,this.messageService.add({severity:"success",summary:"T\u1ea3i \u1ea3nh th\xe0nh c\xf4ng!"})):this.messageService.add({severity:"error",summary:"T\u1ea3i \u1ea3nh th\u1ea5t b\u1ea1i!",detail:l.message})}).catch(l=>{this.messageService.add({severity:"error",summary:"L\u1ed7i khi t\u1ea3i \u1ea3nh l\xean",detail:l.message})})}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(k),e.Y36(E.P),e.Y36(d.F0),e.Y36(O.e),e.Y36(m.eN),e.Y36(u.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-landing"]],decls:63,vars:35,consts:[[1,"surface-0","flex","justify-content-center"],["id","home",1,"landing-wrapper","overflow-hidden"],[1,"py-4","px-4","mx-0","md:mx-6","lg:mx-8","lg:px-8","flex","align-items-center","justify-content-between","relative","lg:static","mb-3"],["routerLink","/pages/dashboard",1,"flex","align-items-center"],["src","assets/layout/images/logo.svg","alt","Logo","height","50",1,"mr-0","lg:mr-2"],["class","text-900 font-medium text-2xl line-height-3 mr-8",4,"ngIf"],["pRipple","","pStyleClass","@next","enterClass","hidden","leaveToClass","hidden",1,"cursor-pointer","block","lg:hidden","text-700",3,"hideOnOutsideClick"],[1,"pi","pi-bars","text-4xl"],[1,"align-items-center","surface-0","flex-grow-1","justify-content-between","hidden","lg:flex","absolute","lg:static","w-full","left-0","px-6","lg:px-0","z-2",2,"top","85%"],[1,"list-none","p-0","m-0","flex","lg:align-items-center","select-none","flex-column","lg:flex-row","cursor-pointer"],["routerLink","/","pRipple","",1,"flex","m-0","md:ml-5","px-0","py-3","text-900","font-medium","line-height-3"],["fragment","features","pRipple","","class","flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3",3,"routerLink",4,"ngIf"],["fragment","features","pRipple","","class","flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3",3,"click",4,"ngIf"],[1,"flex","justify-content-between","lg:block","border-top-1","lg:border-top-none","surface-border","py-3","lg:py-0","mt-3","lg:mt-0"],[4,"ngIf"],[1,"py-4","px-4","lg:px-8","mt-5","mx-0","lg:mx-8"],[1,"cta-banner","cd-padding-sm"],[1,"cta-banner__grid"],[1,"cta-banner__content"],[1,"cta-banner__title"],[1,"cta-banner__description"],[1,"cta-banner__btns","first"],["fragment","datmonan",1,"button2",3,"routerLink"],["alt","Banner",1,"cta-banner__img","cd-radius-md",3,"src"],[1,"container","mt-5"],["id","datmonan",1,"row","justify-content-center"],[1,"col-12","text-center","mb-4"],[1,"text-900","font-normal"],["class","col-md-4 mb-4 d-flex align-items-stretch",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","d-flex","justify-content-center","mt-4"],[3,"pageChange"],[1,"py-4","px-4","mx-0","mt-8","lg:mx-8"],[1,"grid","justify-content-between"],["class","col-12 md:col-6","style","margin-top:-1.5rem;",4,"ngIf"],[1,"col-12","md:col-10","lg:col-6"],[1,"grid","text-center","md:text-left"],[1,"col-12","md:col-6"],[1,"font-medium","text-2xl","line-height-3","mb-3","text-900"],[1,"line-height-3","text-xl","block","cursor-pointer","mb-2","text-700"],[1,"card","flex","justify-center"],["header","Th\xf4ng tin c\u1ee7a h\xe0ng",1,"p-fluid",3,"visible","maximizable","resizable","contentStyle","responsive","draggable","breakpoints","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],[1,"text-900","font-medium","text-2xl","line-height-3","mr-8"],["fragment","features","pRipple","",1,"flex","m-0","md:ml-5","px-0","py-3","text-900","font-medium","line-height-3",3,"routerLink"],["fragment","features","pRipple","",1,"flex","m-0","md:ml-5","px-0","py-3","text-900","font-medium","line-height-3",3,"click"],["pButton","","pRipple","","label","\u0110\u0103ng nh\u1eadp","routerLink","/auth/dang-nhap",1,"p-button-text","p-button-rounded","border-none","font-light","line-height-2","text-blue-500"],["pButton","","pRipple","","label","\u0110\u0103ng k\xfd","routerLink","/auth/dang-ky",1,"p-button-rounded","border-none","ml-5","font-light","line-height-2","bg-blue-500","text-white"],["pButton","","pRipple","",1,"p-button-text","p-button-rounded","border-none","font-light","line-height-2","text-blue-500",3,"label"],["pButton","","pRipple","","label","\u0110\u0103ng xu\u1ea5t",1,"p-button-text","p-button-rounded","border-none","font-light","line-height-2","text-red-500","ml-3",3,"click"],[1,"col-md-4","mb-4","d-flex","align-items-stretch"],[1,"card","w-100"],["alt","Food Image",1,"card-img-top","img-fluid",2,"height","200px","object-fit","cover",3,"src"],[1,"card-body","text-center"],[1,"card-title"],[1,"card-text","text-danger","fw-bold"],[1,"d-grid","gap-2","d-md-flex","justify-content-center"],[1,"btn","btn-info",3,"click"],[1,"btn","btn-primary",3,"click"],["class","modal show",4,"ngIf"],[1,"modal","show"],[1,"modal-content"],["alt","Food Image",1,"card-img-top",2,"width","100%","height","200px",3,"src"],[1,"btn","btn-danger",3,"click"],[1,"col-12","md:col-6",2,"margin-top","-1.5rem"],["href","#",1,"flex","flex-wrap","align-items-center","justify-content-center","md:justify-content-start","md:mb-0","mb-3","cursor-pointer"],["src","assets/layout/images/logo.svg","alt","footer sections","width","50","height","50",1,"mr-2"],[1,"font-medium","text-3xl","text-900"],[1,"grid"],[1,"field","col-12","lg:col-6"],["for","time",2,"font-weight","bold"],["id","time","pTooltip","T\xean ng\u01b0\u1eddi \u0111\u1eb7t tour","tooltipPosition","bottom","pInputText","","required","","autofocus","",3,"ngModel","ngModelChange"],["for","name",2,"font-weight","bold"],["id","name","pTooltip","T\xean ng\u01b0\u1eddi \u0111\u1eb7t tour","tooltipPosition","bottom","pInputText","","required","","autofocus","",3,"ngModel","ngModelChange"],["for","departure",2,"font-weight","bold"],["id","name","pTooltip","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i","tooltipPosition","bottom","pInputText","","required","","autofocus","",3,"ngModel","ngModelChange"],["id","name","pTooltip","M\xf4 t\u1ea3","tooltipPosition","bottom","pInputText","","required","","autofocus","",3,"ngModel","ngModelChange"],["id","name","pTooltip","Th\u1eddi gian ho\u1ea1t \u0111\u1ed9ng","tooltipPosition","bottom","pInputText","","required","","autofocus","",3,"ngModel","ngModelChange"],["for","foodImage",2,"font-weight","bold"],[1,"upload-container"],["id","foodImage","type","file","accept","image/*","required","",3,"change"],["for","foodImage"],["pButton","","pRipple","","label","C\u1eadp nh\u1eadt th\xf4ng tin","pTooltip","C\u1eadp nh\u1eadt th\xf4ng tin",1,"p-button-text",3,"click"]],template:function(t,i){1&t&&(e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"a",3),e._UZ(5,"img",4),e.YNc(6,I,2,1,"span",5),e.qZA(),e.TgZ(7,"a",6),e._UZ(8,"i",7),e.qZA(),e.TgZ(9,"div",8)(10,"ul",9)(11,"li")(12,"a",10)(13,"span"),e._uU(14,"Trang ch\u1ee7"),e.qZA()()(),e.TgZ(15,"li"),e.YNc(16,L,3,2,"a",11),e.YNc(17,F,3,0,"a",12),e.qZA(),e.TgZ(18,"li"),e.YNc(19,U,3,0,"a",12),e.qZA()(),e.TgZ(20,"div",13),e.YNc(21,N,3,0,"div",14),e.YNc(22,j,3,1,"div",14),e.qZA()()(),e.TgZ(23,"div",15)(24,"section",16)(25,"div",17)(26,"div",18)(27,"h1",19),e._uU(28),e.qZA(),e.TgZ(29,"p",20),e._uU(30),e.qZA(),e.TgZ(31,"div",21)(32,"a",22),e._uU(33,"\u0110\u1eb7t m\xf3n ngay"),e.qZA()()(),e.TgZ(34,"figure"),e._UZ(35,"img",23),e.qZA()()()(),e.TgZ(36,"div",24)(37,"div",25)(38,"div",26)(39,"h2",27)(40,"b"),e._uU(41,"Danh s\xe1ch c\xe1c m\xf3n \u0103n"),e.qZA()()(),e.YNc(42,q,15,7,"div",28),e.ALo(43,"paginate"),e.TgZ(44,"div",29)(45,"div",30)(46,"pagination-controls",31),e.NdJ("pageChange",function(l){return i.onPageChange(l)}),e.qZA()()()()(),e.TgZ(47,"div",32)(48,"div",33),e.YNc(49,z,9,3,"div",34),e.TgZ(50,"div",35)(51,"div",36)(52,"div",37)(53,"h4",38),e._uU(54,"Canteen"),e.qZA(),e.TgZ(55,"p",39),e._uU(56),e.qZA(),e.TgZ(57,"p",39),e._uU(58),e.qZA()()()()()()()(),e.TgZ(59,"div",40)(60,"p-dialog",41),e.NdJ("visibleChange",function(l){return i.showInfoShop=l}),e.YNc(61,Q,32,6,"ng-template",42),e.YNc(62,B,1,0,"ng-template",43),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngIf",i.infoShop),e.xp6(1),e.Q6J("hideOnOutsideClick",!0),e.xp6(9),e.Q6J("ngIf",i.isLoggedIn),e.xp6(1),e.Q6J("ngIf",!i.isLoggedIn),e.xp6(2),e.Q6J("ngIf","ROLE_ADMIN"==i.isAdmin),e.xp6(2),e.Q6J("ngIf",!i.isLoggedIn),e.xp6(1),e.Q6J("ngIf",i.isLoggedIn),e.xp6(6),e.Oqu(i.infoShop.description),e.xp6(2),e.hij("Th\u1eddi gian m\u1edf c\u1eeda ",i.infoShop.openTime,""),e.xp6(2),e.Q6J("routerLink",e.DdM(28,H)),e.xp6(3),e.Q6J("src",i.backendApiUrl+"/api/v1/project/auth/"+i.infoShop.imageUrl,e.LSH),e.xp6(7),e.Q6J("ngForOf",e.xi3(43,25,i.foods,e.WLB(29,R,i.pageSize,i.page))),e.xp6(7),e.Q6J("ngIf",i.infoShop),e.xp6(7),e.hij("Email: ",i.infoShop.email,""),e.xp6(2),e.hij("S\u0110T: ",i.infoShop.phone," "),e.xp6(2),e.Akn(e.DdM(32,Y)),e.Q6J("visible",i.showInfoShop)("maximizable",!0)("resizable",!1)("contentStyle",e.DdM(33,G))("responsive",!0)("draggable",!1)("breakpoints",e.DdM(34,K))("modal",!0))},dependencies:[s.sg,s.O5,d.rH,d.yS,f.h,u.jx,_.Hq,x.FN,v.LS,T.V,p.Fj,p.JJ,p.Q7,p.On,M.o,s.JJ,v._s],styles:['@charset "UTF-8";html[_ngcontent-%COMP%]{scroll-behavior:smooth}#hero[_ngcontent-%COMP%]{background:linear-gradient(0deg,rgba(255,255,255,.2),rgba(255,255,255,.2)),radial-gradient(77.36% 256.97% at 77.36% 57.52%,#eeefaf 0%,#c3e3fa 100%);height:700px;overflow:hidden}.pricing-card[_ngcontent-%COMP%]:hover{border:2px solid var(--cyan-200)!important}@media screen and (min-width: 768px){#hero[_ngcontent-%COMP%]{clip-path:ellipse(150% 87% at 93% 13%);height:530px}}@media screen and (min-width: 1300px){#hero[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;transform:scale(1.2);top:15%}#hero[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{max-width:450px}}@media screen and (max-width: 1300px){#hero[_ngcontent-%COMP%]{height:600px}#hero[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:static;transform:scale(1);margin-left:auto}#hero[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}#hero[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{width:100%;max-width:100%}}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}.card[_ngcontent-%COMP%]{border-radius:10px;box-shadow:0 4px 6px #0000001a}.card-title[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card-text[_ngcontent-%COMP%]{font-size:16px}.pagination-controls[_ngcontent-%COMP%]{margin-top:20px}.modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;opacity:0;visibility:hidden;transition:opacity .3s ease-in-out,visibility .3s ease-in-out}.modal.show[_ngcontent-%COMP%]{opacity:1;visibility:visible}.modal-content[_ngcontent-%COMP%]{background:white;padding:25px;border-radius:12px;width:90%;max-width:500px;text-align:center;box-shadow:0 10px 30px #0000004d;transform:translateY(-20px);transition:transform .3s ease-in-out}.modal.show[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{transform:translateY(0)}.modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;color:#333;margin-bottom:15px}.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#555;margin-bottom:10px}.modal-close[_ngcontent-%COMP%]{background:#e74c3c;color:#fff;border:none;padding:10px 15px;border-radius:8px;cursor:pointer;font-size:16px;margin-top:15px;transition:background .3s}.modal-close[_ngcontent-%COMP%]:hover{background:#c0392b}@media (max-width: 600px){.modal-content[_ngcontent-%COMP%]{width:95%;padding:20px}}.banner-container[_ngcontent-%COMP%]{width:100%;height:300px;margin:0 auto;display:flex;justify-content:center;align-items:center}.cta-banner[_ngcontent-%COMP%]{background-color:#fff;border-radius:.75em;box-shadow:0 0 0 1px #14151a0d,0 .3px .4px #14151a05,0 .9px 1.5px #14151a0b,0 3.5px 6px #14151a17;overflow:hidden}.cta-banner__grid[_ngcontent-%COMP%]{display:flex;gap:1.5rem;align-items:center;align-content:center;flex-direction:row}.cta-banner__grid[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{min-width:0}.cta-banner__content[_ngcontent-%COMP%]{text-align:center;display:grid;gap:.75rem;min-width:30%!important}.cd-padding-sm[_ngcontent-%COMP%]{padding:1.5rem}.cd-radius-md[_ngcontent-%COMP%]{border-radius:.375em}.button2[_ngcontent-%COMP%]{display:inline-block;transition:all .2s ease-in;position:relative;overflow:hidden;z-index:1;color:#090909;padding:.7em 1.7em;cursor:pointer;font-size:18px;border-radius:.5em;background:#e8e8e8;border:1px solid #e8e8e8;box-shadow:6px 6px 12px #c5c5c5,-6px -6px 12px #fff}.button2[_ngcontent-%COMP%]:active{color:#666;box-shadow:inset 4px 4px 12px #c5c5c5,inset -4px -4px 12px #fff}.button2[_ngcontent-%COMP%]:before{content:"";position:absolute;left:50%;transform:translate(-50%) scaleY(1) scaleX(1.25);top:100%;width:140%;height:180%;background-color:#0000000d;border-radius:50%;display:block;transition:all .5s .1s cubic-bezier(.55,0,.1,1);z-index:-1}.button2[_ngcontent-%COMP%]:after{content:"";position:absolute;left:55%;transform:translate(-50%) scaleY(1) scaleX(1.45);top:180%;width:160%;height:190%;background-color:#009087;border-radius:50%;display:block;transition:all .5s .1s cubic-bezier(.55,0,.1,1);z-index:-1}.button2[_ngcontent-%COMP%]:hover{color:#fff;border:1px solid #009087}.button2[_ngcontent-%COMP%]:hover:before{top:-35%;background-color:#009087;transform:translate(-50%) scaleY(1.3) scaleX(.8)}.button2[_ngcontent-%COMP%]:hover:after{top:-45%;background-color:#009087;transform:translate(-50%) scaleY(1.3) scaleX(.8)}.cta-banner__img[_ngcontent-%COMP%]{width:100%}.notification-container[_ngcontent-%COMP%]{position:fixed;top:10px;right:10px;background:#f8d7da;color:#721c24;padding:10px;border-radius:5px;box-shadow:0 0 10px #0000001a;max-width:300px;z-index:1000}.notification-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 5px;font-size:16px}.notification-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.notification-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 0;border-bottom:1px solid #ccc}.notification-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.upload-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.upload-container[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{opacity:0;width:150px;height:40px;position:absolute;cursor:pointer}.upload-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;background-color:#084cdf;color:#fff;border-radius:5px;cursor:pointer;transition:background .3s ease-in-out}.upload-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{background-color:#0d45a5}']}),n})(),X=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild([{path:"",component:V}]),d.Bz]}),n})(),$=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.ez]}),n})();var w=r(464),W=r(5787);let re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.ez,u.m8,W.T,u.m8]}),n})(),se=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.ez,X,$,f.l,w.S,re,_.hJ,x.EV,v.JX,s.ez,w.S,f.l,_.hJ,x.EV,T.S,p.u5,s.ez,M.j]}),n})()}}]);