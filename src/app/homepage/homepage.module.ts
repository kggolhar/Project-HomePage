import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes =[
  {path:"", component: HomeComponent}
  
]


@NgModule({
  declarations: [
    SearchBoxComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class HomepageModule { }
