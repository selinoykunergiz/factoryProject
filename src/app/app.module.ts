import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.component';
import { FactoryComponent } from 'src/_components/factory/factory.component';
import { FireComponent } from 'src/_components/fire/fire.component';
import { CausesComponent } from 'src/_components/causes/causes.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent,
    FireComponent,
    CausesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
