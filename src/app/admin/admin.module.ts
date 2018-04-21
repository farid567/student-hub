import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { Component } from '@angular/core/src/metadata/directives';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes: Routes =[
  { path : "dashboard", component: AdminDashboardComponent }
]

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminDashboardComponent]
})
export class AdminModule { }
