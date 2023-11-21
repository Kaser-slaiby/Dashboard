import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
