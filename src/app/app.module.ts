import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SelectDropDownModule } from 'ngx-select-dropdown'

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminComponent } from "./admin/admin.component";
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import {AdminService} from './admin/admin.service'

@NgModule({
  declarations: [AppComponent, DashboardComponent, AdminComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    SelectDropDownModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
