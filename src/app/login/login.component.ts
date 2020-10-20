import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
	hide = true;

	loginForm: FormGroup;
	registerForm: FormGroup;

	emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

	constructor(private formBuilder: FormBuilder) {

	}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.pattern(this.emailRegx)]],
			password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]]
		});

		this.registerForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.pattern(this.emailRegx)]],
			mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
			password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]]
		});

		
	}

	login(): void {

		if (!this.loginForm.valid) {
			return;
		}
		console.log(this.loginForm.value);
		return;
	}

	register() {

		if (!this.registerForm.valid) {
			return;
		}
		console.log(this.registerForm.value);
		return;
	}
}
