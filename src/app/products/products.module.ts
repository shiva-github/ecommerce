import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { ListingComponent } from './listing/listing.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
	{
		path: '', children: [
			{ path: '', component: ListingComponent },
			{ path: ':id', component: SingleComponent }
		]
	}
];


@NgModule({
  declarations: [ListingComponent, SingleComponent],
  imports: [
	CommonModule,
	MatCardModule,
	MatIconModule,
	MatButtonModule,
	RouterModule.forChild(routes),
  ]
})
export class ProductsModule { }
