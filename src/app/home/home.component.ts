import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
	subscribeNewsletter: FormGroup;
	emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	
	constructor(private formBuilder: FormBuilder) { }
	
	ngOnInit(): void {
		this.subscribeNewsletter = this.formBuilder.group({
			email: ['', [Validators.required, Validators.pattern(this.emailRegx)]],
			
		});
	}
	subscribeToNewsletter() {
		
		if (!this.subscribeNewsletter.valid) {
			return;
		}
		console.log(this.subscribeNewsletter.value); 
	}	
}
