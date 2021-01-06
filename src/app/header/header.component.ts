import { Component, OnInit } from '@angular/core';
import { CookieManagerService } from '../helper/cookie-manager/cookie-manager.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
	productCount:string;
	constructor(private cookieManagerService:CookieManagerService) { }
	
	ngOnInit(): void {
		// console.log(this.cookieManagerService.cartCount);

		this.cookieManagerService.subject.subscribe({
			next: data=> {
				console.log('seq: 3', data)
				// this.productCount = data.toString();
				this.productCount = data == 0 ?
			'' : data > 99 ? 
			'99+' : data.toString();

			}
		}
	);
	this.cookieManagerService.updateCartCount();

		

			
	}
	logout() {
		//   console.log('here')
	}
}
