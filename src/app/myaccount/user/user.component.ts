import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
	userSettings:FormGroup;
	hideEdit:Boolean;
	constructor(private formBuilder: FormBuilder) { }
	
	ngOnInit(): void {
		this.hideEdit = false;
		this.userSettings = this.formBuilder.group({
			email: ['', [Validators.required,]],
			fname: ['', [Validators.required]],
			lname: ['', [Validators.required]],
			mobile: ['', [Validators.required]],
			password: ['', [Validators.required]],
			cpassword: ['', [Validators.required]],
		});
	}
	saveUserSettings(): void {
		
		if (!this.userSettings.valid) {
			return;
		}
		console.log(this.userSettings.value);
		return;
	}
	submitUser() {
		return false;
	}
}
