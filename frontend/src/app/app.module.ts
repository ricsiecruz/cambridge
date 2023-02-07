import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleAddComponent } from './components/article-add/article-add.component';
import { NgZorroAntdModule, NZ_I18N, NZ_ICONS, en_US } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons'
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { LoginComponent } from './components/login/login.component';
import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ArticleAddComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // DemoNgZorroAntdModule
    NgZorroAntdModule
  ],
  providers: [
    ApiService,
    AuthenticationService,
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
