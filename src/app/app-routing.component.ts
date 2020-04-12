import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FactoryComponent } from 'src/_components/factory/factory.component';
import { FireComponent } from 'src/_components/fire/fire.component';
import { CausesComponent } from 'src/_components/causes/causes.component';

const routes: Routes = [
    { path: '', component: FactoryComponent},
    { path: 'fire', component: FireComponent},
    { path: 'causes', component: CausesComponent}
  ];
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    providers: [],
    declarations: []
  })
  export class AppRoutingModule { }
  