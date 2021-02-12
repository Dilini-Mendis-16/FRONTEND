import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// @ts-ignore

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddProductComponent} from './add-product/add-product.component';
import {HomeComponent} from './home/home.component';

import {ViewTypesComponent} from './view-types/view-types.component';
import {TitlebarComponent} from './CommonElement/titlebar/titlebar.component';
import {ViewitemsComponent} from './viewitems/viewitems.component';
import {FarmerPostComponent} from './farmer-post/farmer-post.component';
import {AddPostComponent} from './add-post/add-post.component';



@NgModule({
  declarations: [TitlebarComponent,
    AddProductComponent,
    HomeComponent,
    FarmerPostComponent,
    ViewTypesComponent,
    ViewitemsComponent, AddPostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'product/:id', component: AddProductComponent},
      {path: 'home', component: HomeComponent},
      {path: '', component: HomeComponent},
      {path: 'types', component: ViewTypesComponent},
      { path: 'post', component: FarmerPostComponent },


  ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [TitlebarComponent]
})
export class FarmerModule { }
