import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ConfirmModalComponent } from './common/components/confirm-modal.component';
import { AuthService } from './common/services/auth.service';
import { ApiService } from './common/services/api.service';
import { ServiceBase } from './common/services/service.base';
import { LoadingComponent } from './common/components/loading.component';
import { MenuAsideComponent } from './common/components/menu-aside.component';
import { MenuTopComponent } from './common/components/menu-top.component';
import { FooterComponent } from './common/components/footer.component';
import { AuthGuard } from './common/services/auth.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MainService } from './main/main.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppComponent } from './app.component';
import { RoutingDefault } from './app.routing';
import { RoutingCustom } from './app.custom.routing';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { GlobalServiceCulture } from './global.service.culture';
import { StartupService } from './startup.service';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)


export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    LoadingComponent,
    ConfirmModalComponent,
    MenuAsideComponent,
    MenuTopComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RoutingDefault,
    RoutingCustom,
    SimpleNotificationsModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot()
    
  ],
  providers: [
    HttpModule,
    StartupService,
    {
      provide : LOCALE_ID,
      useValue: 'pt-PT'
    },
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    },
    AuthService,
    ApiService,
    AuthGuard,
    MainService,
    ServiceBase,
    GlobalServiceCulture,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
