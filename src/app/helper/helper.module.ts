import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
	{
	  path: '', children: [
		{ path: '', component: PageNotFoundComponent }
	  ]
	}
  ];
  
@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
	CommonModule,
	MatButtonModule,
	RouterModule.forChild(routes),
  ]
})
export class HelperModule { }
