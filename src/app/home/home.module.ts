import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md'


import { HomeComponent } from './home.component';

const routes: Routes = [
	{
	  path: '', children: [
		{ path: '', component: HomeComponent }
	  ]
	}
  ];
  


@NgModule({
  declarations: [HomeComponent],
  imports: [
	CommonModule,
	MatCardModule,
	MatButtonModule,
	MatIconModule,
	CarouselModule, 
	WavesModule,
	MatFormFieldModule,
	MatInputModule,
	ReactiveFormsModule,
	RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
