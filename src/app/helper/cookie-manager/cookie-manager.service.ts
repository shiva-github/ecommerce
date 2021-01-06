import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CookieManagerService {
	private cartCount: number;
	public subject = new Subject<number>();

	constructor() {
		this.cartCount = 0;
		console.log('seq: 1', this.cartCount)
		this.getCart();
	}

	updateCartCount() {
		this.subject.next(this.cartCount);
	}
	
	getCart() {
		this.cartCount = 0;
		console.log('seq: 2', this.cartCount)
		try {

			let cartData = [];
			let cookie = this.getCookie('_CART_');

			if(typeof cookie != 'undefined' && cookie != null && cookie != '') {
				let productsList = cookie.indexOf('&') != -1 ? cookie.split('&'): [cookie];
				for(let prod of productsList) {
					
					let productData = prod.indexOf('%') != -1 ? prod.split('%'): '';

					if(productData != '' && productData.length == 2) {
						let prodObj = new Object();
						prodObj['id'] = productData[0];
						prodObj['quantity'] = productData[1];
						this.cartCount += parseInt(productData[1]); 
						cartData.push(prodObj);
					}
				}
			}
			return cartData;
		} catch(ex) {
			// logger
			console.log('here', ex);
		}
	}
	setCart(productid,quantity) {

		try {
			let cartData = this.getCart();

			cartData = cartData != null && typeof cartData != 'undefined' ? cartData: [];
			if(cartData.length == 0 && typeof productid != 'undefined' && productid != null && productid != '') {
				let prodObj = new Object();
				prodObj['id'] = productid;
				prodObj['quantity'] = quantity;
				cartData.push(prodObj);
			} else {
				if(cartData != null && typeof cartData != 'undefined') {
					let index = cartData.findIndex((data) => {
						
						return data.id == productid;
					});
					if(index != -1){
						cartData[index].quantity = parseInt(cartData[index].quantity) + 1;
					} else {
						let prodObj = new Object();
						prodObj['id'] = ''+productid;
						prodObj['quantity'] = '1';
						cartData.push(prodObj);
					}
					this.cartCount += 1;
				}
			}
			let cartString = '';
			for(let cartprod of cartData) {
				cartString += cartprod['id'] + '%' + cartprod['quantity'] + '&';
			}
			cartString = cartString.substring(0, cartString.length-1);
			
			this.set('_CART_', encodeURIComponent(cartString));
		} catch(ex) {
			// logger
			console.log(ex)
		}
		this.updateCartCount();
	}
	set(name, value, expires?: number, path?: string, domain?: string, secure?: boolean, samesite?: string) {
		
		this.setCookie(name, value, expires);
		return true;
	}
	get(cname) {
		return this.getCookie(cname);
	}
	private setCookie(cname, cvalue, exdays=1) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	
	private getCookie(cname) {
		try {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);

		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
	} catch(ex) {
		// logger
		console.log(ex);
	}
		return "";
	}
}
