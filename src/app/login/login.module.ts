import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule} from '@angular/material/tabs';

import { LoginComponent } from './login.component';




import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: LoginComponent }
    ]
  }
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,

    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LoginModule { }
