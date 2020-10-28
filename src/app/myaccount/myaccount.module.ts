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
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';


import { OrdersComponent } from './orders/orders.component';
import { UserComponent, AddressDialog, DeleteDialog, CardDialog } from './user/user.component';




const routes: Routes = [
	{
		path: '', children: [
			{ path: '', component: UserComponent },
			{ path: 'orders', component: OrdersComponent }
		]
	}
];

@NgModule({
	declarations: [OrdersComponent, UserComponent, AddressDialog, DeleteDialog, CardDialog],
	imports: [
		MatDialogModule,
		CommonModule,
		MatButtonModule,
		MatChipsModule,
		MatSelectModule,
		MatDividerModule,
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
