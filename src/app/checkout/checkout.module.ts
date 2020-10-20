import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
	  path: '', children: [
		{ path: '', component: CartComponent }
	  ]
	}
  ];

@NgModule({
  declarations: [CartComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes),
  ]
})
export class CheckoutModule { }
