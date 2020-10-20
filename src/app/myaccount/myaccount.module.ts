import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


import { OrdersComponent } from './orders/orders.component';
import { UserComponent } from './user/user.component';




const routes: Routes = [
	{
		path: '', children: [
			{ path: '', component: UserComponent },
			{ path: 'orders', component: OrdersComponent }
		]
	}
];

@NgModule({
	declarations: [OrdersComponent, UserComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatCardModule,
		MatTabsModule,
		MatFormFieldModule,
		MatToolbarModule,
		MatInputModule,
		RouterModule.forChild(routes),
	]
})
export class MyaccountModule { }
