import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
// modulos principales
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
// para el servidor apirest
import { HttpClientModule } from '@angular/common/http';
// para el refresh
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
    // AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
